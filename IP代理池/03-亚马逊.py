import time

import requests
import queue
import pymysql
from loguru import logger
from lxml import etree
from retrying import retry
from feapder.network.user_agent import get
import threading


class Yamaxun():
    def __init__(self):
        self.db = pymysql.connect(host='127.0.0.1', user='root', password='root', db='spiders10')
        self.cursor = self.db.cursor()
        self.index_url = 'https://www.amazon.cn/nav/ajax/hamburgerMainContent?ajaxTemplate=hamburgerMainContent&pageType=Gateway&hmDataAjaxHint=1&navDeviceType=desktop&isSmile=0&isPrime=0&isBackup=false&hashCustomerAndSessionId=c108bde04b677f19f2e5d7df74ff6ce0cad515fc&languageCode=zh_CN&environmentVFI=AmazonNavigationCards%2Fdevelopment%40B6122949553-AL2_x86_64&secondLayerTreeName=apparel_shoes%2Bcomputer_office%2Bhome_kitchen%2Bbeauty_pca%2Bkindle_ebook%2Bsports_outdoor%2Bgrocery%2Bbaby_toy%2Bphones_elec%2Bjewelry_watch%2Bhome_improvement%2Bvideo_game%2Bmusical_instrument%2Bcamera&customerCountryCode=null'
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
            "X-Requested-With": "XMLHttpRequest",
            "downlink": "10",
            "ect": "4g",
            "rtt": "250",
        }
        self.ip_url = 'https://dps.kdlapi.com/api/getdps/?secret_id=othy4dayz12khxp3vumh&num=1&signature=oha4jp4c8yqppcymxj4485db55&pt=1&sep=1'
        # 存放ip地址
        self.ip_queue = queue.Queue()
        # 存放分类的url地址
        self.classify_url_queue = queue.Queue()
        # 存放详情的url地址
        self.detail_url_queue = queue.Queue()
        # 存放数据队列
        self.data_queue = queue.Queue()

    def create_table(self):

            # 使用预处理语句创建表
            sql = '''
                        CREATE TABLE IF NOT EXISTS yamaxun(
                            id int primary key auto_increment not null,
                            price VARCHAR(255) NOT NULL, 
                            title VARCHAR(255) NOT NULL,
                            goods_url VARCHAR(255) NOT NULL,
                            classify VARCHAR(255) NOT NULL)
                        '''
            try:
                self.cursor.execute(sql)
                print("CREATE TABLE SUCCESS.")
            except Exception as ex:
                print(f"CREATE TABLE FAILED,CASE:{ex}")

    def get_ip(self):
        """
                获取ip数据，将ip数据放进队列
                :return: ip地址
                """
        while True:

            if self.ip_queue.empty():

                response = requests.get(self.ip_url)
                print(response.text)
                self.ip_queue.put(response.text)
            else:

                continue

    # 最大重试3次，3次全部报错，才会报错
    @retry(stop_max_attempt_number=3)
    def get_data(self, url):
        ip = self.ip_queue.get()
        proxies = {
            'http': 'http://' + ip,

        }
        # print(proxies)
        self.headers['User-Agent'] = get()
        response = requests.get(url=url, headers=self.headers, timeout=2, proxies=proxies)
        if response.status_code == 200:
            self.ip_queue.put(ip)
        else:
            assert response.status_code == 200, '状态码错误'
        return response

    def get_info_url(self):
        response = self.get_data(self.index_url)
        html_data = response.json()['data']
        # print(html_data)
        html_object = etree.HTML(html_data)
        # 前两个没有请求地址
        li_list = html_object.xpath('//ul/li[position() > 2]')
        for li in li_list:
            item = {}
            if li.xpath('./a/text()'):
                # 全部分类的数据是分类页面
                if '全部' in li.xpath('./a/text()')[0]:
                    continue
                # 带有https的为广告页面
                if 'http' in li.xpath('./a/@href')[0]:
                    continue

                item['title'] = li.xpath('./a/text()')[0]
                # item['href'] = li.xpath('./a/@href')[0]

                # print(li.xpath('./a/@href')[0])
                item['href'] = li.xpath('./a/@href')[0].split('=')[1].split('&')[0]
                # print(item)
                self.classify_url_queue.put(item)

    def detail_url_get(self):
        while True:
            info_url = self.classify_url_queue.get()
            # time.sleep(random.randint(500, 800) / 1000)
            try:
                # 请求分类查看所有商品页面
                response = self.get_data("https://www.amazon.cn/s?rh=n%3A" + info_url['href'] + "&fs=true")
            except Exception as e:
                logger.error("https://www.amazon.cn/s?rh=n%3A" + info_url['href'] + "&fs=true")
                continue
            html_data = etree.HTML(response.text)
            if html_data.xpath('//span[@class="s-pagination-strip"]/span[last()]/text()'):
                # 获取到分类的总共页数
                max_page = html_data.xpath('//span[@class="s-pagination-strip"]/span[last()]/text()')[0]
                for page in range(1, int(max_page) + 1):
                    # 每个分类单独页面拼接
                    new_url = 'https://www.amazon.cn/s?rh=n%3A' + info_url['href'] + '&fs=true&page=' + str(page)
                    # 请求每个分类的单独页面
                    try:
                        res = self.get_data(new_url)
                    except Exception as e:
                        logger.error(new_url)
                        continue

                    html = etree.HTML(res.text)
                    detail_href_list = html.xpath('//div[@class="sg-col-inner"]/span/div[1]/div/div/div//h2/a/@href')
                    # time.sleep(random.randint(200, 500) / 1000)
                    # 获取到详情商品的详情地址和分类
                    for detail_href in detail_href_list:
                        item = {}
                        item['detail_href'] = detail_href
                        item['classify_data'] = info_url['title']

                        self.detail_url_queue.put(item)
            self.classify_url_queue.task_done()

    def paras_data(self):
        while True:
            goods_data = self.detail_url_queue.get()
            # 拼接详情页面
            goods_url = 'https://www.amazon.cn' + goods_data['detail_href']
            try:
                response = self.get_data(goods_url)
            except Exception as e:
                logger.error("详情商品网址出现异常", goods_url)
                continue
            # print(response.text)
            html_data = etree.HTML(response.text)
            # 获取商品标题
            title = html_data.xpath('//div[@id="centerCol"]//h1/span/text()')[0] if html_data.xpath(
                '//div[@id="centerCol"]//h1/span/text()') else html_data.xpath('//title/text()')[0]
            # 获取商品价格
            if html_data.xpath('//div[@id="centerCol"]//div[@id="apex_desktop"]//span[@class="a-price-whole"]/text()'):
                price = "￥" + html_data.xpath(
                    '//div[@id="centerCol"]//div[@id="apex_desktop"]//span[@class="a-price-whole"]/text()')[0]
            else:
                price = '-'.join(html_data.xpath(
                    '//td[@class="a-span12"]//span[@class="a-offscreen"]/text()'))
            print([goods_data['classify_data'], title.strip(), price, goods_url])
            self.data_queue.put((goods_data['classify_data'], title.strip(), price, goods_url))
            self.detail_url_queue.task_done()

    def save_data(self):
        while True:
            data_list = []
            for i in range(30):
                data = self.data_queue.get()
                data_list.append((0,) + data)
                self.data_queue.task_done()

            # SQL 插入语句
            sql = 'INSERT INTO yamaxun(id, price, title, classify, goods_url) values(%s, %s, %s, %s, %s)'
            # 执行 SQL 语句
            try:
                # print(sql, (0, data[0], data[1], data[2], data[3]))
                self.cursor.executemany(sql, data_list)
                # 提交到数据库执行
                self.db.commit()
                print('数据插入成功...')
            except Exception as e:
                print(f'数据插入失败: {e}')
                # 如果发生错误就回滚
                self.db.rollback()


    def main(self):
        self.create_table()
        t_list = []
        # 获取ip线程
        t_ip = threading.Thread(target=self.get_ip)
        t_list.append(t_ip)
        # 获取分类线程
        t_info = threading.Thread(target=self.get_info_url)
        t_list.append(t_info)
        # 获取详细商品线程
        for i in range(8):
            t_detail_url = threading.Thread(target=self.detail_url_get)
            t_list.append(t_detail_url)
        # 解析数据线程
        for i in range(10):
            t_paras = threading.Thread(target=self.paras_data)
            t_list.append(t_paras)
        # 保存数据线程
        t_save = threading.Thread(target=self.save_data)
        t_list.append(t_save)

        for t in t_list:
            t.setDaemon(True)
            t.start()

        time.sleep(3)
        for q in [self.classify_url_queue, self.detail_url_queue, self.detail_url_queue]:
            q.join()


if __name__ == '__main__':
    # 文件过大于500M就会重新生成一个文件
    IpCool.add("runtime_{time}.log", rotation="500 MB")
    ymx = Yamaxun()
    ymx.main()
import requests
from lxml import etree


class Daili():

    def __init__(self):
        self.base_url = 'https://www.kuaidaili.com/free/inha/{}/'
        self.test_url = 'http://httpbin.org/ip'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
        self.IPS = []

    def get_data(self):
        for i in range(1, 10):
            response = requests.get(self.base_url.format(i), headers=self.headers)
            self.parse_Data(response.text)

    def parse_Data(self, data):
        html = etree.HTML(data)
        tr_list = html.xpath('//table//tbody/tr')
        # print(tr_list)
        for tr in tr_list:
            ip_addr = {'ip': tr.xpath('./td[1]/text()')[0], 'port': tr.xpath('./td[2]/text()')[0]}
            self.save_data(ip_addr)

    def save_data(self, ip_addr):
        # IPS = []
        proxies = {'http': 'http://1.198.73.75:19546'}
        print(proxies)
        try:
            res = requests.get(self.test_url, headers=self.headers, timeout=2, proxies=proxies)
            if res.status_code == 200:
                print('状态码是:', res.status_code)
                print('状态码是:', res.text)
                self.IPS.append(proxies)
        except Exception as e:
            print('请求超时')



    def main(self):
        self.get_data()
        print(self.IPS)


if __name__ == '__main__':
    dl = Daili()
    dl.main()

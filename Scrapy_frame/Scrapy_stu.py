"""
windows系统：
    1.pip install wheel
    2.下载twisted文件，网址：https://www.lfd.uci.edu/~gohlke/pythonlibs/#twisted
    3.终端进入下载目录，执行pip install Twisted-20.3.0-cp39-cp39-win_amd64.whl
    4.pip install pywin32
    5.pip install scrapy

基本使用
    -创建项目 scrapy startproject 项目名称
    - cd 项目名称
    - scrapy genspider 爬虫文件名称 爬虫域名
    - 运行项目：
        -scrapy crawl 爬虫名称 #这种执行形式会显示执行的日志信息
        -scrapy crawl 爬虫名称 --nolog #这种执行形式不会显示执行的日志信息

解析数据


存储数据
    -基于终端指令的存储：
        -在爬虫文件中，将爬取道德数据全部封装到parse方法的返回值中
        -只可以存储到json、jsonlines、 jl、csv、xml、marshal、pickle文件中，使用命令 scrapy crawl 项目名称  -o xxx.csv
    -基于管道的持久化存储
        -在爬虫文件中进行数据解析
        -将解析到的数据封装到item类型的对象中
            -在items.py文件中定义相关的字段
        -将item对象提交给管道
            yield item
        -在管道中接收item类型对象
        -在管道中对接收到的数据进行任意形式的持久化存储操作
        -在配置文件中开启管道机制
        ITEM_PIPELINES = {

        }

"""
import pymongo
import redis
import scrapy

"""

管道深入操作
    -将数据存储到数据库
"""

"""
        -mysql

import pymysql


class MysqlPipeline:
    conn = None
    cursor = None

    def open_spider(self, spider):
        self.conn = pymysql.Connect(host='127.0.0.1', port=3306, user='root', password='root', db='spider_scrapy_mysql',
                                    charset='utf-8')
        self.cursor = self.conn.cursor()

    def process_item(self, item, spider):
        title = item['item']
        sql = 'insert into xiaoshuo (title) values ("%s")' % title
        self.cursor.execute(sql)
        self.conn.commit()
        return item # 爬虫文件只会将item交给优先级最高（数值最小）的管道类，处理完后return是将item传给下一个管道类。
"""

"""

    -redis
class RedisPipeline:
    conn = None

    def open_spider(self, spider):
        self.conn = redis.Redis(host="127.0.0.1", port=6379)

    def process_item(self, item, spider):
        # 如果像将一个python字典直接写入到redis中，则redis模块版本务必是2.10.6
        # pip install redis==2.10.6
        self.conn.lpush('xiaoshuo', item)
        return item

    def close_spider(self, spider):
        self.conn.close()
"""

"""

    -Mongo
    
class MongoPipeline:
    conn = None
    db_spider = None

    def open_spider(self, spider):
        self.conn = pymongo.MongoClient(host="127.0.0.1", port=27017)
        self.db_spider = self.conn['spider']

    def process_item(self, item, spider):
        self.db_spider["title"].insert_one({'title',item['title']})
        return item

    def close_spider(self, spider):
        self.conn.close()
"""

"""

图片类数据的爬取
pip install Pillow

from scrapy.pipelines.images import ImagesPipeline


class mediaPipeLine(ImagesPipeline):
    # 重写父类的三个方法来完成图片的二进制数据的请求和持久化存储
    # 可以根据图片地址，对其进行请求，获取图片资源
    def get_media_requests(self, item, info):
        img_src = item['src']
        yield scrapy.Request(img_src)

    # 指定图片的名称（只需要返回图片存储的名称即可）
    def file_path(self, request, response=None, info=None, *, item=None):
        img_name = request.url.split('/')[-1]
        return img_name

    def item_completed(self, results, item, info):
        # 可以将当前的管道类接收到的item传递给下一个管道类
        return item
    
    在配置文件中开启管道、指定图片存储文件夹的名字IMAGES_STORE=文件名称
"""

"""

深度爬取
    - 如何提高scrapy的爬取效率
        - 增加并发，在setting中修改CONCURRENT_REQUESTS = 100
        - 降低日志级别：LOG_LEVEL = 'ERROR'或者LOG_LEVEL = 'WARNING'
        - 禁止cookie COOKIES_ENABLED = False
        - 禁止重试：RETRY_ENABLED = False
        - 减少下载超时：DOWNLOAD_TIMEOUT = 10 超时时间为10秒，超时则被放弃

"""


"""
    - 发post请求：爬虫文件中重写start_requests方法，yield scrapy.FormRequest(url, callback = self.parse,fdata=data)
"""


"""
Scrapy的五大核心组件
    -引擎
    -调度器
    -下载器
    -爬虫
    -项目管道
"""


"""
中间件：爬虫中间件和下载中间件
    -代理中间件
    -UA中间件
    -Cookie中间件
    
"""

"""
scrapy+selenium编码流程
    -在爬虫文件中定义浏览器对象，将浏览器对象作为爬虫类的一个成员变量
    -在中间件中通过spider获取爬虫文件中定义的浏览器对象，进行请求发送和获取响应数据
    -在爬虫文件中重写一个closed方法，关闭浏览器对象
"""


"""
CrawlSpider-全栈数据爬取
   -使用流程
   -新建一个scrapy项目
   -cd项目
   -创建爬虫文件(*):
        - scrapy genspider -t crawl spiderName www.xxx.com
        - 生成的爬虫文件父类是CrawlSpider，多了一个rules元组  
"""

"""
爬虫应用场景分类：
    -通用爬虫
    -聚焦爬虫
    -功能爬虫
    -分布式爬虫
    -增量式爬虫
        -用来监测网站数据更新的情况（爬取网站最新更新出来的数据）
        -核心：去重，使用一个记录表实现，记录表中存放爬取过的数据记录
            可以选择Redis的Set集合作为去重方案，每行数据可以用md5生产数据指纹
            import hashlib
            m = hashlib.md5()
            m.update(all_data.encode('utf-8'))
            data_id = m.hexdigest()
        
        注意Redis版本的问题，pip install redis == 2.10.6才可以将字典直接lpush到redis中
"""


"""

scrapy项目部署
    -scrapyd: 会以守护进程的方式存在系统中，监听爬虫的运行和请求，然后启动进程来执行爬虫程序。
        -安装scrapyd服务：pip install scrapyd
        -安装scrapyd客户端：pip install scrapyd-client
        -启动scrapyd服务，打开终端在scrapy项目路径下启动scrapyd的命令：scrapyd
        -找到项目的scrapy.cfg，[deploy:部署名]，url是部署地址，project默认就行，username = xxx, password = xxx如果不需要用户名和密码可以不写
        -scrapyd -deploy 部署名 -p 项目名称，status为ok时表示部署成功
        -终端查看部署情况：scrapyd -deploy -l
管理scrapy项目
    指令管理
    -安装curl命令行工具
        -window需要安装 https://curl.se/download.html
            -Windows 64 bit binary Chocolatey
            -下载完成后，放置到无中文的文件夹下解压缩，解压后将bin文件夹配置环境变量
            -参考：https://www.cnblogs.com/lisa2016/p/12193494.html
        -linux和mac无需单独安装
    启动项目
        -curl http://localhost:6800/schedule.json -d project=项目名 -d spider=爬虫名
        返回结果：注意其中的jobid
    关闭项目
        -curl http://localhost:6800/cancel.json -d project=项目名 -d job=项目的jobid
    删除爬虫项目：
        -curl http://localhost:6800/delproject.json -d project=爬虫项目名称
    
    requests模块控制scrapy项目
        import requests
        # 启动爬虫
        url = 'http://localhost:6800/schedule.json'
        data = {
            'project':项目名,
            'spider':爬虫名,
        }
        resp = requests.post(url,data=data)
        
        # 停止爬虫
        url = 'http://localhost:6800/cancel.json'
        data = {
            'project':项目名,
            'job':启动爬虫时返回的jobid,
        }
        resp = requests.post(url,data=data)
"""


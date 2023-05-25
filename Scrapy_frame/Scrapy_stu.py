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

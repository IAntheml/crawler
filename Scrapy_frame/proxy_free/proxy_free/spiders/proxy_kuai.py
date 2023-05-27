import scrapy
from scrapy.linkextractors import LinkExtractor
from scrapy.spiders import CrawlSpider, Rule


class ProxyKuaiSpider(CrawlSpider):
    name = "proxy_kuai"
    allowed_domains = ["www.kuaidaili.com"]
    start_urls = ["https://www.kuaidaili.com/free/inha"]
    # LinkExtractor链接提取器：可以根据指定的规则提取链接，规则就是allow的正则表达式。
    link = LinkExtractor(allow=r"/free/inha/\d+")
    # 规则解析器：对link提取到的链接进行请求发送，然后根据指定callback规则解析请求到的页面源码数据。
    # follow=True：可以将链接提取器提取到的url作为起始url，继而将所有的页面获取。
    rules = (Rule(link, callback="parse_item", follow=True),)

    # 注意：link = LinkExtractor(allow=r"/free/inha/\d+")当allow后的正则表达式为空时会获取起始url下的所有可见的url
    """
    目前在scrapy中有集中发送请求的方式？
        -start_urls列表可以发送请求
        -scrapy.Request()
        -scrapy.FormRequest()
        -Rule规则解析器
    在使用crawlSpider实现深度爬取的时候，需要配合手动请求发送的方式进行搭配。
    """

    # 数据解析
    # 该解析函数调用的次数取决于link提取链接的个数
    def parse_item(self, response):
        item = {}
        # item["domain_id"] = response.xpath('//input[@id="sid"]/@value').get()
        # item["name"] = response.xpath('//div[@id="name"]').get()
        # item["description"] = response.xpath('//div[@id="description"]').get()
        return item


"""
分布式
概念
    可以使多台电脑搭建一个分布式集群，使得多台电脑可以对同一个网站的数据进行联合且分布的数据爬取。
原生的scrapy框架为什么无法实现分布式？
    -多台电脑无法共享同一个调度器
    -多台电脑之间无法共享同一个管道
如何使scrapy可以实现分布式？
    -scrapy-redis可以给原生的scrapy框架提供可被共享的调度器和管道！
    -pip install scrapy-redis
        -注意：scrapy-redis只可以将爬取到的数据存储到redis中
编码流程（重点）：
    1 创建项目 scrapy start scrapy_redis_item
    2 cd scrapy_redis_item
    3 创建爬虫文件 scrapy genspider -t crawl scrapy_redis_proxy https://www.kuaidaili.com/free/inha
        -修改爬虫文件
            -导包：from scrapy_redis_spiders import RedisCrawlSpider
            -修改当前爬虫类的父类为RedisCrawlSpider
            -将start_urls 替换为 redis_key，表达调度器队列的名称
            -进行常规的请求操作和数据解析
    4 settings配置文件的修改
        -常规内容修改
        - 在配置文件settings中指定使用共享的管道
            ITEM_PIPELINES = {
                'scrapy_redis.pipelines.RedisPipeline':400 
            }
        - 指定使用共享的调度器
            # 使用scrapy-redis组件的去重队列
            DUPEFILTER_CLASS = "scrapy_redis_dupefilter.RFPDupeFilter"
            # 使用scrapy-redis组件调度器
            SCHEDULER = "scrapy_redis.scheduler.Scheduler"
            # 是否允许暂停
            SCHEDULER_PERSIST = True
        -指定数据库
        REDIS_HOST = '127.0.0.1'
        REDIS_PORT = 6379
        # REDIS_ENCODING = 'utf-8'
        # REDIS_PARAMS = {'password':'123456'}
    5 修改Redis数据库的配置文件(redis.windows.conf)
        在配置文件中改行代码是没有注释：
            bind 127.0.0.1
        将上述代码注释即可（解除本地绑定，使其他主机也可以访问本机数据库）
        
        如果配置文件中存在protected-mode = true，将true改为false，该配置为true表示其他机器只可以读本机数据库不可以写，修改为false关闭保护模式后，其他设备可以远程访问且修改数据库中的数据
    6. 启动redis数据库的服务端和客户端
    7. 运行项目，程序暂定一直在等待，等待爬取任务
    8. 需要向可以被共享的调度器的队列（redis_key的值）中放入一个起始的url
        -在redis数据库中执行如下操作：
            lpush redis_key 起始链接


"""
import scrapy


class FirstSpider(scrapy.Spider):
    name = "first"
    # 允许的域名：scrapy可以发起如下列表域名中的请求
    # allowed_domains = ["www.baidu.com"]
    # 起始的url列表：列表中存放的url可以被Scrapy发起get请求
    start_urls = ["https://www.baidu.com"]

    # 用于数据解析
    # 参数response：就是请求之后对应的响应对象

    def parse(self, response):
        response.xpath()

        # extract()可以将selector对象中的data参数的值取出
        # extract_first()可以将列表中第0个列表元素表示的selector对象中data的参数值取出
        pass

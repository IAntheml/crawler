import scrapy


class WangyiSpider(scrapy.Spider):
    name = "wangyi"
    # allowed_domains = ["www.xxx.com"]
    start_urls = ["https://news.163.com"]

    def parse(self, response):
        pass

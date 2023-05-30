import scrapy


class AmazonBsrSpider(scrapy.Spider):
    name = "amazon_bsr"


    def start_requests(self):
        start_urls = ["https://www.amazon.com/gp/bestsellers/pc/17935294011"]
        for url in start_urls:
            yield scrapy.Request(url = url, callback=self.parse())

    def parse(self, response):
        print(response.status_code)
        print(response.text)

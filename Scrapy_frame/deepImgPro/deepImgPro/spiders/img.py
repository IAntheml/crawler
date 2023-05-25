import scrapy

from ..items import DeepimgproItem


class ImgSpider(scrapy.Spider):
    name = "img"
    # allowed_domains = ["pic.netbian.com"]
    start_urls = ["https://pic.netbian.com/4kmeinv/"]
    page_num = 2
    max_page_num = 8
    page_url_tem = 'https://pic.netbian.com/4kmeinv/index_%d.html'

    def parse(self, response):
        li_list = response.xpath('//*[@id="main"]/div[3]/ul/li')
        for li in li_list:
            title = li.xpath('./a/b/text()').extract_first() + '.jpg'
            detail_url = 'https://pic.netbian.com/' + li.xpath('./a/@href').extract_first()
            # print(title,detail_url)
            item = DeepimgproItem()
            item['title'] = title
            yield scrapy.Request(meta={'item': item}, url=detail_url, callback=self.detail_parse)
        if self.page_num < self.max_page_num:
            page_url = format(self.page_url_tem % self.page_num)
            self.page_num += 1
            yield scrapy.Request(url=page_url, callback=self.parse)

    def detail_parse(self, response):
        img_src = 'https://pic.netbian.com/' + response.xpath('//*[@id="img"]/img/@src').extract_first()
        # print(image_src)
        item = response.meta['item']
        item['img_src'] = img_src
        yield item

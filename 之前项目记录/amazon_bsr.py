"""
1. 获取BSR前300的产品的title，产品链接，产品价格（list price、是否BD）, 发布日期， 评分数量，评星

第一页：https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_pg_{1}?_encoding=UTF8&pg={1}
headers里面cookie和referer可能会变

"""
import json

import requests
from lxml import etree

# 第一页
url = 'https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_pg_1?_encoding=UTF8&pg=1'

# headers = {
#     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
#     "accept-encoding": "gzip, deflate, br",
#     "accept-language": "en-US,en;q=0.9",
#     "cookie": "session-id=137-6393475-0466111; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=135-6968260-4489257; lc-main=en_US; session-token=\"pOI+fnV8k7r5uIFXzraqTbFLQUTFBDifI2fjSoBo0W09bk+J/yB5J/ObxNyj4f0N9hDC6rTJ2Rv8151aVoRo+Sdy5XYyDVPYIzroPnid83bfawAFlCqhf7dUJdePrKL2oVqI4v+wNOTUUfh4mgisIaAkeBKn4Ns0wTl/PmwO0mJ7eaAOP14AofXB1qejfHik8gzdGe20z6vBJYJf0W6109ohCcMqdUMv0t9AB787XM8=\"; csm-hit=tb:X0S1J87Z6DBBF0Q0HRCP+s-0PAAZ6T1ATHRHM5NZAER|1680172211910&t:1680172211910&adb:adblk_no",
#     "device-memory": "8",
#     "downlink": "1.3",
#     "dpr": "1",
#     "ect": "3g",
#     # "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_nav_pc_2_300189",
#     "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011",
#     "rtt": "400",
#     "sec-ch-device-memory": "8",
#     "sec-ch-dpr": "1",
#     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-platform": "\"Windows\"",
#     "sec-ch-ua-platform-version": "\"15.0.0\"",
#     "sec-ch-viewport-width": "1919",
#     "sec-fetch-dest": "document",
#     "sec-fetch-mode": "navigate",
#     "sec-fetch-site": "same-origin",
#     "sec-fetch-user": "?1",
#     "upgrade-insecure-requests": "1",
#     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
#     "viewport-width": "1919"
# }

headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "max-age=0",
    "cookie": "session-id=144-6129142-4867248; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=134-7591698-1158269; lc-main=en_US; session-token=\"+fVzP3YW9+Pj3yXroP5my12z5+zxtHiXwNjK5mAlWJU/0Uxprcl9bfxuEVZcg6CbRBOHbwriSLeXUaF+DYzWhQqTj0yqrlJuF0FlanhwdlQbIO5xrATS5a8Yv5V15aTNld/PlN1XTbEr1ABG8SQPSnh81ucbEfFTcmqhk9V1+AroQRwwQSXlRt4da9cPuJWwx+1y5LjciCaCU/yRmWd0zdefUDHS8GHOpBkalUIpRwE=\"; csm-hit=tb:s-MN7MMBKVS5WDT1KE9H9V|1680278711620&t:1680278714339&adb:adblk_no",
    "device-memory": "8",
    "downlink": "6.1",
    "dpr": "1",
    "ect": "4g",
    "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_nav_pc_2_284715",
    "rtt": "250",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "1",
    "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "sec-ch-viewport-width": "1384",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    "viewport-width": "1384"
}
response = requests.get(url, headers=headers)
print(response.status_code)
html = etree.HTML(response.text)

pre_link = "https://www.amazon.com"
# 获取title
title_list = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
# 产品链接
product_link_list = html.xpath('//div[@class="zg-grid-general-faceout"]//a[@tabindex=-1]/@href')
# 获取评分数量
review_count_list = html.xpath('//div[@class="zg-grid-general-faceout"]//span[@class="a-size-small"]/text()')
# 获取评星
review_stars_list = html.xpath('//div[@class="zg-grid-general-faceout"]//span[@class="a-icon-alt"]/text()')
# 价格列表
price_list = html.xpath('//div[@class="zg-grid-general-faceout"]//span[@class="_cDEzb_p13n-sc-price_3mJ9Z"]/text()')
# 图片列表
picture_list = html.xpath('//div[@class="zg-grid-general-faceout"]//img/@data-a-dynamic-image')
# 排名获取
ranking_list = html.xpath('//div[@class="a-section zg-bdg-ctr"]//span[@class="zg-bdg-text"]/text()')

# 这一页的翻滚数据
next_page = html.xpath('//div[@class="p13n-desktop-grid"]/@data-client-recs-list')[0]

print(next_page)

# print(len(title_list))
# print(title_list)
for title, product_link, review_count, review_stars, price, picture, ranking in zip(title_list, product_link_list,
                                                                                    review_count_list,
                                                                                    review_stars_list, price_list,
                                                                                    picture_list, ranking_list):
    # print(i)
    item = {}
    item['title'] = title
    item['product_link'] = pre_link + product_link.split("ref")[0] if len(product_link.split("ref")) > 0 else ""
    item['review_count'] = review_count
    item['review_stars'] = review_stars
    item['price'] = price
    item['picture'] = picture.split("[600,400],\"")[1].split("\":[900,600]}")[0] if len(
        picture.split("[600,400],\"")) > 0 and len(picture.split("[600,400],\"")[1].split("\":[900,600]}")) > 0 else ""
    item['ranking'] = ranking
    print(item)

# 第一页


# 翻页

# headers = {
#     "accept": "text/html, application/json",
#     "accept-encoding": "gzip, deflate, br",
#     "accept-language": "en-US,en;q=0.9",
#     "content-type": "application/json",
#     "cookie": "session-id=137-6393475-0466111; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=135-6968260-4489257; session-token=\"i9WX3ACtc+hTgBWaSkCIlVnuV18QI9NM4Iklby347hab4Vkv+rzQlaV0WjyGvyP4C4ShYuFVDF/ARpTgekY7vULBvqHxj8yeDL+z8xDHABqz/5MMeXtmyQ2A3zymQ4zhPyX+M++cA/SrMAe+tc0j9ZU/ph80Ebbr4/8kJxG75qj1gwAxlvi/X9aqr1rWJ3gEHCW//l6wlbJCr1qJnbjrnWMYeuCHL5S4B5PtKTFTl2k=\"; csm-hit=tb:718R598XGBQYS4BX9VXV+s-HM1TGPJJ4Z3PBY7B4XW1|1680166040273&t:1680166040273&adb:adblk_no",
#     "device-memory": "8",
#     "downlink": "1.55",
#     "dpr": "1",
#     "ect": "3g",
#     "origin": "https://www.amazon.com",
#     "referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
#     "rtt": "400",
#     "sec-ch-device-memory": "8",
#     "sec-ch-dpr": "1",
#     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
#     "sec-ch-ua-mobile": "?0",
#     "sec-ch-ua-platform": "\"Windows\"",
#     "sec-ch-ua-platform-version": "\"15.0.0\"",
#     "sec-ch-viewport-width": "1920",
#     "sec-fetch-dest": "empty",
#     "sec-fetch-mode": "cors",
#     "sec-fetch-site": "same-origin",
#     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
#     "viewport-width": "1920",
#     "x-amz-acp-params": "tok=yI8n_0aXmunpgfMklcUgOG2C3PIi7U3zGQC6-jq6wj4;ts=1680164707621;rid=HM1TGPJJ4Z3PBY7B4XW1;d1=111;d2=0",
#     "x-requested-with": "XMLHttpRequest"
# }
#
# next_page = "https://www.amazon.com/acp/p13n-zg-list-grid-desktop/p13n-zg-list-grid-desktop-66060a50-59dd-41d8-a7cf-383304720513-1679651361432/nextPage"
#
# params = {
#     "page-type": "undefined",
#     "stamp": "1680164708210"
# }
#
# datas = {"faceoutkataname": "GeneralFaceout", "ids": [
#     "{\"id\":\"B08V3PMGBR\",\"metadataMap\":{\"render.zg.rank\":\"39\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B09D8THD92\",\"metadataMap\":{\"render.zg.rank\":\"40\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B085VNCZHZ\",\"metadataMap\":{\"render.zg.rank\":\"41\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B078Z3PTJP\",\"metadataMap\":{\"render.zg.rank\":\"42\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B086HJXKJJ\",\"metadataMap\":{\"render.zg.rank\":\"43\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B088B9S52T\",\"metadataMap\":{\"render.zg.rank\":\"44\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B0866V73R6\",\"metadataMap\":{\"render.zg.rank\":\"45\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
#     "{\"id\":\"B09DRJKZW9\",\"metadataMap\":{\"render.zg.rank\":\"46\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"],
#          "indexes": [38, 39, 40, 41, 42, 43, 44, 45], "linkparameters": "", "offset": "38",
#          "reftagprefix": "zg_bs_17935294011"}
#
# response = requests.post(next_page, headers=headers, params=params, json=datas)
#
# html = etree.HTML(response.text)
#
# title_list = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
#
# print(len(title_list))
#
# for title in zip(title_list):
#     # print(i)
#     item = {}
#     item['title'] = title
#     print(item)

# 翻页

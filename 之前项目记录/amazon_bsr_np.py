import requests

from lxml import etree

import time
url = "https://www.amazon.com/acp/p13n-zg-list-grid-desktop/p13n-zg-list-grid-desktop-66060a50-59dd-41d8-a7cf-383304720513-1679651361432/nextPage"

# headers = {
#     "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
#     "x-amz-acp-params": "tok=43rVbVJL0uxe8SDOb092fWyObfClReQgQk1LDvd6eGs;ts=1680368287085;rid=2HQ784HXCZ4EG50E8QN5;d1=563;d2=0",
#     "sec-ch-device-memory": "8",
#     "sec-ch-viewport-width": "1671",
#     "sec-ch-ua-platform-version": "\"15.0.0\"",
#     "x-requested-with": "XMLHttpRequest",
#     "dpr": "1",
#     "downlink": "10",
#     "sec-ch-ua-platform": "\"Windows\"",
#     "device-memory": "8",
#     "rtt": "100",
#     "sec-ch-ua-mobile": "?0",
#     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
#     "viewport-width": "1671",
#     "content-type": "application/json",
#     "accept": "text/html, application/json",
#     "sec-ch-dpr": "1",
#     "ect": "4g",
#     "origin": "https://www.amazon.com",
#     "sec-fetch-site": "same-origin",
#     "sec-fetch-mode": "cors",
#     "sec-fetch-dest": "empty",
#     "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_pg_2?_encoding=UTF8&pg=2",
#     "accept-encoding": "gzip, deflate, br",
#     "accept-language": "en-US,en;q=0.9",
#     "content-length": "2269",
#     "cookie": "csm-sid=008-3984857-2433032&session-id=131-4520195-6246563&session-id-time=2082787201l&i18n-prefs=USD&ubid-main=132-5085503-4850914&session-token=\"6kN0u2F4CnY4qH/iVNSatkZeHy+yBh69p0IRbkA1YYyKYJHlC5Pn1B6t+UM501dIJCx3m8zpTbirQKcuguFidUoxwODQzuXtkmpmvTxv11apalG82prSBNixKxDCEOHxTww+6ZIa4hMTYpOWu08uE0z5Er5DOcE9FDLLVA/1aPzjKyc1oY/+fHEJSyd8avZFpIYy1c13umGLPgG3HdM0TYxJP1SUDfhYVFPl3LyBWKQ=\"&csm-hit=tb:s-2HQ784HXCZ4EG50E8QN5|1680368288321&t:1680368288645&adb:adblk_no"
# }

headers = {
    "accept": "text/html, application/json",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "cookie": "csm-sid=008-3984857-2433032; session-id=131-4520195-6246563; session-id-time=2082787201l; i18n-prefs=USD; ubid-main=132-5085503-4850914; session-token=\"+XYWNuwqfvsRRTApNnrTZgsmcUNpp3RC6msv0WbmixC9BXc9Kbg2G4pPgoQXMxFoAysHxGbM9ne7PuumS9U/lYQASang/Fk0tbLkB9AGtZIA11RVXODJFAVCzTNk01fTiLdTzfK31fGSf6+6wkyVHJwyejMVYxwHV9A7wMaLUrWthlCTnRIWahggCQRypcRpJX3lmlgtD+fSkn0aapoIU5/b/UCIIXp+8iAFxYLqWWA=\"; csm-hit=tb:s-B1ETVAK7J943W4PQF6AT|1680361699019&t:1680361699948&adb:adblk_no",
    "device-memory": "8",
    # "downlink": "10",  # "downlink": "1.3",
    "dpr": "1",
    # "ect": "4g",  # "ect": "3g",
    "origin": "https://www.amazon.com",
    "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_pg_1?_encoding=UTF8&pg=1",
    # "rtt": "250",  # "rtt": "100",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "1",
    "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    # "sec-ch-viewport-width": "1671",  # "sec-ch-viewport-width": "1384",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    # "viewport-width": "1671", # "viewport-width": "1384",
    "x-amz-acp-params": "tok=nMbepCURo-ZOXc64cyDCdfINI5-LOuIBH_uphDcZpz0;ts=1680361697712;rid=B1ETVAK7J943W4PQF6AT;d1=563;d2=0",
    "x-requested-with": "XMLHttpRequest"
}

params = {
    "page-type": "undefined",
    "stamp": str(time.time())
}

# data_1 = {"faceoutkataname":"GeneralFaceout","ids":["{\"id\":\"B07YDN7P1C\",\"metadataMap\":{\"render.zg.rank\":\"31\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B0BTT3F159\",\"metadataMap\":{\"render.zg.rank\":\"32\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B07HM6KJN8\",\"metadataMap\":{\"render.zg.rank\":\"33\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B08FWNNWTB\",\"metadataMap\":{\"render.zg.rank\":\"34\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B07L56SN8M\",\"metadataMap\":{\"render.zg.rank\":\"35\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B073TSK26W\",\"metadataMap\":{\"render.zg.rank\":\"36\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B01LFSDZCU\",\"metadataMap\":{\"render.zg.rank\":\"37\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}","{\"id\":\"B09GFP2FHL\",\"metadataMap\":{\"render.zg.rank\":\"38\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"],"indexes":[30,31,32,33,34,35,36,37],"linkparameters":"","offset":"30","reftagprefix":"zg_bs_300189"}
data_1 = {
	"faceoutkataname": "GeneralFaceout",
	"ids": ["{\"id\":\"B0B8VQSQY8\",\"metadataMap\":{\"render.zg.rank\":\"97\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}", "{\"id\":\"B078Z3PTJP\",\"metadataMap\":{\"render.zg.rank\":\"98\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}", "{\"id\":\"B09M71XXN3\",\"metadataMap\":{\"render.zg.rank\":\"99\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}", "{\"id\":\"B082YGNKJH\",\"metadataMap\":{\"render.zg.rank\":\"100\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"],
	"indexes": [46, 47, 48, 49],
	"linkparameters": "",
	"offset": "46",
	"reftagprefix": "zg_bs_17935294011"
}

data_2 ={
"faceoutkataname" : "GeneralFaceout" ,
"ids" : [

"{\"id\":\"B086ZN5R6P\",\"metadataMap\":{\"render.zg.rank\":\"81\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B07P12YNLG\",\"metadataMap\":{\"render.zg.rank\":\"82\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B084KQB481\",\"metadataMap\":{\"render.zg.rank\":\"83\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B0BCQT2FJJ\",\"metadataMap\":{\"render.zg.rank\":\"84\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B0BK73PK1F\",\"metadataMap\":{\"render.zg.rank\":\"85\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B08LPSXNMS\",\"metadataMap\":{\"render.zg.rank\":\"86\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B08WWN1S2K\",\"metadataMap\":{\"render.zg.rank\":\"87\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B088JYB8V4\",\"metadataMap\":{\"render.zg.rank\":\"88\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
"{\"id\":\"B089QVWRS9\",\"metadataMap\":{\"render.zg.rank\":\"89\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B06XZLP8Q6\",\"metadataMap\":{\"render.zg.rank\":\"90\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B0BKVBC5JZ\",\"metadataMap\":{\"render.zg.rank\":\"91\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B08XQMSN84\",\"metadataMap\":{\"render.zg.rank\":\"92\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B076B4ZVF2\",\"metadataMap\":{\"render.zg.rank\":\"93\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B07JBXM83R\",\"metadataMap\":{\"render.zg.rank\":\"94\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B07SGZ6DB8\",\"metadataMap\":{\"render.zg.rank\":\"95\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B098R77RTP\",\"metadataMap\":{\"render.zg.rank\":\"96\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
"{\"id\":\"B0B8VQSQY8\",\"metadataMap\":{\"render.zg.rank\":\"97\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B078Z3PTJP\",\"metadataMap\":{\"render.zg.rank\":\"98\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B09M71XXN3\",\"metadataMap\":{\"render.zg.rank\":\"99\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
"{\"id\":\"B082YGNKJH\",\"metadataMap\":{\"render.zg.rank\":\"100\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"
],
"indexes" : [30, 31, 32, 33, 34, 35, 36, 37,38, 39, 40, 41, 42, 43, 44, 45,46, 47, 48, 49],
"linkparameters" : "" ,
"offset" : "30" ,
"reftagprefix" : "zg_bs_17935294011"
}
response = requests.post(url=url, headers=headers, params=params, json=data_2)

print(response.text)
print(response.content)
print(response.headers)

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

# print(len(title_list))
# print(title_list)
for title, product_link, review_count, review_stars, price, picture, ranking in zip(title_list, product_link_list,
                                                                                    review_count_list,
                                                                                    review_stars_list, price_list,
                                                                                    picture_list, ranking_list):
    # print(i)
    item = {}
    item['ranking'] = ranking
    item['title'] = title
    item['product_link'] = pre_link + product_link.split("ref")[0] if len(product_link.split("ref")) > 0 else ""
    item['review_count'] = review_count
    item['review_stars'] = review_stars
    item['price'] = price
    item['picture'] = picture.split("[600,400],\"")[1].split("\":[900,600]}")[0] if len(
        picture.split("[600,400],\"")) > 0 and len(picture.split("[600,400],\"")[1].split("\":[900,600]}")) > 0 else ""
    print(item)


#
# data_3 = {
# "faceoutkataname" : "GeneralFaceout" ,
# "ids" : [
# "{\"id\":\"B0823JXXX4\",\"metadataMap\":{\"render.zg.rank\":\"47\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
# "{\"id\":\"B09QRLZMMH\",\"metadataMap\":{\"render.zg.rank\":\"48\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
# "{\"id\":\"B086PHRXLR\",\"metadataMap\":{\"render.zg.rank\":\"49\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}" ,
# "{\"id\":\"B085VNCZHZ\",\"metadataMap\":{\"render.zg.rank\":\"50\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"
# ],
#
# "indexes" : [
# 46 ,
# 47 ,
# 48 ,
# 49
# ],
#
# "linkparameters" : "" ,
# "offset" : "46" ,
# "reftagprefix" : "zg_bs_17935294011"
# }



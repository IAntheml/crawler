import requests
import re
from lxml import etree


headers = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Sec-Ch-Ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"
response = requests.get(url, headers=headers)
cookies = response.cookies

session_id = cookies.get("session-id")
session_id_time = cookies.get("session-id-time")
i_pref = cookies.get("i18n-prefs")
sp_cdn = cookies.get("sp-cdn")

headers_sec = {
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache",
    "Sec-Ch-Ua": '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
cookies_sec = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn
}

response = requests.get(url, headers=headers_sec, cookies=cookies_sec)

print(response.status_code)
ubid_main = response.cookies.get("ubid-main")
ue_id = re.findall("ar ue_id = '(.*?)',", response.text)[0]
# csm_hit = get_hit(ue_id)
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

print(ubid_main)
print(ue_id)

headers_next = {
    "Accept": "text/html, application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Device-Memory": "8",
    "Downlink": "1.3",
    "Dpr": "0.8",
    "Ect": "3g",
    "Origin": "https://www.amazon.com",
    "Pragma": "no-cache",
    "Referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011",
    "Rtt": "350",
    "Sec-Ch-Device-Memory": "8",
    "Sec-Ch-Dpr": "0.8",
    "Sec-Ch-Ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Ch-Ua-Platform-Version": "\"15.0.0\"",
    "Sec-Ch-Viewport-Width": "1413",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Viewport-Width": "1413",
    "X-Amz-Acp-Params": "tok=PYXMLT0SvDGzl5-m4pNYUKW1RXlfzCo5f94E-SjwFKA;ts=1685590599772;rid=6NTFH668ENXEBF08C6DA;d1=604;d2=0",
    "X-Requested-With": "XMLHttpRequest"
}

cookies_next = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn,
    "ubid-main": ubid_main,
    "csm-hit": csm_hit,
    "session-token": ""
}




# cookies = {
#     "session-id": session_id,
#     "session-id-time": session_id_time,
#     "i18n-prefs": i_pref,
#     "sp-cdn": sp_cdn,
#     # "csm-hit": "tb:8C0PV9WB478MEQC0WNAB+s-H351ND075PREQNFMT1KK^|1681876800436&t:1681876800436&adb:adblk_no",
#     # "ubid-main": "134-7327429-3111024",
#     # "session-token": "o/pAGdEPnR3oI+H39EMrXiMV/IBNOet9oEAIzWOg5Gh7NLtcE7D97axwCXUO4LOSxi2oTcjLjfugdMfzEz2TEIQ/n7ZLj+ghaVq1NLsyID8SmmRz7gW8tx+fye0OdbXRaEa96pWIz2z27nGQ5XtuR2oJhDiwKGYISpEZ3CBXA1QbcaEnidVMgwBts+IGrifI7LGpM2HXLMQIZE3lul+2pv9R+j7RaK2pGWnZ32YME1U="
# }
#
# response = requests.get(url, headers=headers,cookies = cookies)
# print(response.status_code)
# print(response.text)

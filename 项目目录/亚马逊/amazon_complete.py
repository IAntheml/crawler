import logging
import time

import requests
from lxml import etree
import re

"""
类目链接，作为单独一次request请求去拿
"""
headers_category = {
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
url_category = "https://www.amazon.com/Best-Sellers/zgbs"
response = requests.get(url_category, headers=headers_category)
cookies_category = response.cookies
session_id = cookies_category.get("session-id")
session_id_time = cookies_category.get("session-id-time")
i_pref = cookies_category.get("i18n-prefs")
sp_cdn = cookies_category.get("sp-cdn")

cookies_category = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn
}

response = requests.get(url_category, headers=headers_category, cookies=cookies_category)
category_response = response.text
html = etree.HTML(category_response)
catalog_list = html.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[2]/div/a/@href')

# 获取二级菜单所有连接
catalog_url_list = []

for catalog in catalog_list:
    catalog_url = "https://www.amazon.com/" + catalog
    catalog_url_list.append(catalog_url)

# print(catalog_url_list)

"""
类目链接存放数据库后，拿到类目链接，请求首页
"""


def get_cookie(response, cookie):
    if response.status_code == 429:
        cookies = response.cookies
        session_id = cookies.get("session-id")
        session_id_time = cookies.get("session-id-time")
        i_pref = cookies.get("i18n-prefs")
        sp_cdn = cookies.get("sp-cdn")
        cookie["session-id"] = session_id
        cookie["session-id-time"] = session_id_time
        cookie["i18n-prefs"] = i_pref
        cookie["sp-cdn"] = sp_cdn
        return cookie
    elif response.status_code == 200:
        ubid_main = response.cookies.get("ubid-main")
        if ubid_main:
            cookie["ubid-main"] = ubid_main
        ue_id = re.findall("ar ue_id = '(.*?)',", response.text)[0]
        if ue_id:
            cookie["csm-hit"] = "tb:s-" + ue_id + "|" + str(int(time.time()*1000)) + '&t:' + str(int(time.time()*1000)) + "&adb:adblk_no"
        return cookie

def get_token(response):
    if response.status_code == 200:
        token = re.findall('data-acp-params="(.*?)"', response.text)[0]
        return token

def parse_rank_first(response):
    first_page_item = []
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
    price_list = html.xpath(
        '//div[@class="zg-grid-general-faceout"]//span[@class="_cDEzb_p13n-sc-price_3mJ9Z"]/text()')
    # 图片列表
    picture_list = html.xpath('//div[@class="zg-grid-general-faceout"]//img/@data-a-dynamic-image')
    # 排名获取
    ranking_list = html.xpath('//div[@class="a-section zg-bdg-ctr"]//span[@class="zg-bdg-text"]/text()')

    for title, product_link, review_count, review_stars, price, picture, ranking in zip(title_list,
                                                                                        product_link_list,
                                                                                        review_count_list,
                                                                                        review_stars_list,
                                                                                        price_list,
                                                                                        picture_list, ranking_list):
        # print(i)
        item = {}
        item['title'] = title
        item['product_link'] = pre_link + product_link.split("ref")[0] if len(product_link.split("ref")) > 0 else ""
        item['review_count'] = review_count
        item['review_stars'] = review_stars
        item['price'] = price
        item['picture'] = picture.split("[600,400],\"")[1].split("\":[900,600]}")[0] if len(
            picture.split("[600,400],\"")) > 0 and len(
            picture.split("[600,400],\"")[1].split("\":[900,600]}")) > 0 else ""
        item['ranking'] = ranking
        first_page_item.append(item)
    return first_page_item

def get_next_page_url(html):
    next_page = ""
    page_url = html.xpath('//li[@class="a-last"]/a/@href')
    if page_url and isinstance(page_url, list) and len(page_url) > 0:
        next_page = "https://www.amazon.com" + page_url[0]
    return next_page


def get_scroll_page_data(scroll_page,bs_category):
    id_list = []
    index_list = []
    bs_category = "zg_bs_300189"

    for item in scroll_page:
        index_list.append(int(item["metadataMap"]["render.zg.rank"]) -1)
        id_item = {}
        id_item["id"] = item["id"]

    offset = 0
    if len(index_list)>0:
        offset = index_list[0]

    data = {
        "faceoutkataname": "GeneralFaceout",
        "ids": id_list,
        "indexes" : index_list,
        "linkparameters": "",
        "offset": offset,
        "reftagprefix": bs_category
    }
    return data


def get_scroll_page_item(data, cookies, token):
    return []


def get_page(url, page_type, cookies):
    if page_type == "FIRST_PAGE_REQUEST" or page_type == "OTHER_PAGE_REQUEST_FIRST":
        headers_first = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
            "Sec-Ch-Ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
            "Sec-Ch-Ua-Mobile": "?0",
            "Sec-Ch-Ua-Platform": "\"Windows\"",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "none",
            "Sec-Fetch-User": "?1",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
        }
        for i in range(3):
            if cookies:
                response = requests.get(url, headers=headers_first, cookies=cookies)
            else:
                response = requests.get(url, headers=headers_first)
            if response.status_code == 429:
                cookies = get_cookie(response, cookies)
                continue
            elif response.status_code == 200:
                html = etree.HTML(response.text)
                test_path = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
                cookies = get_cookie(response, cookies)
                if test_path:
                    first_page_item = parse_rank_first(response)
                    scroll_page = html.xpath('//div[@class="p13n-desktop-grid"]/@data-client-recs-list')[0]
                    data = get_scroll_page_data(scroll_page)
                    token = get_token(response)
                    scroll_page_item = get_scroll_page_item(data,cookies,token)
                    first_page_item += scroll_page_item
                    next_page_url = get_next_page_url(html)
                    return first_page_item, next_page_url
                else:
                    continue
            else:
                logging.log("未知的错误" + response.status_code + response.text)

page_first = "https://www.amazon.com/Best-Sellers-Electronics-Computer-Routers/zgbs/electronics/300189"


frist_page_data,next_page_url  = get_page(page_first, "FIRST_PAGE_REQUEST", {})

print(frist_page_data)
print(next_page_url)

if len(next_page_url):
    next_page_data,next_page_url = get_page(next_page_url, "OTHER_PAGE_REQUEST_FIRST",{})
    print(next_page_data)
    print(next_page_url)

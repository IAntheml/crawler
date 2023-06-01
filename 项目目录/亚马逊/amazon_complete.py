import logging

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
url_first = "https://www.amazon.com/Best-Sellers-Electronics-Computer-Routers/zgbs/electronics/300189"

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
response = requests.get(url_first, headers=headers_first)


cookies_first = {}

def get_cookie_hit(ue_id):
    pass

def parse_rank_first(response):
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
        print(item)

if response.status_code == 429:
    cookies = response.cookies
    session_id = cookies.get("session-id")
    session_id_time = cookies.get("session-id-time")
    i_pref = cookies.get("i18n-prefs")
    sp_cdn = cookies.get("sp-cdn")

    cookies_first = {
        "session-id": session_id,
        "session-id-time": session_id_time,
        "i18n-prefs": i_pref,
        "sp-cdn": sp_cdn
    }

    response = requests.get(url_first, headers=headers_first, cookies=cookies_first)

    print(response.status_code)
    print(response.text)
elif response.status_code == 200:
    html = etree.HTML(response.text)
    test_path = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
    if test_path:
        parse_rank_first(response)
        # 这一页的翻滚数据
        next_page = html.xpath('//div[@class="p13n-desktop-grid"]/@data-client-recs-list')[0]
        print(next_page)
    else:
        # 如果没有拿到数据，则需要生成cookie再请求
        ubid_main = response.cookies.get("ubid-main")
        ue_id = re.findall("ar ue_id = '(.*?)',", response.text)[0]
        cookies_first["ubid-main":] = ubid_main
        cookies_first["csm-hit"] =get_cookie_hit(ue_id)
        response = requests.get(url_first, headers=headers_first, cookies=cookies_first)
        if response.status_code == 200:
            parse_rank_first(response)
        else:
            logging.log("数据解析错误")


def get_next_page(response):
    # 获取token
    token = re.findall('data-acp-params="(.*?)"', response)[0]

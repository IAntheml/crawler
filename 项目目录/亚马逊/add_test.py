import time
import re
import json
from lxml import etree
import requests


def get_cookie(response, pre_cookies):
    """
    :param response: 页面请求返回结果
    :param pre_cookies: 当前缓存cookie
    :return: 从返回值获取cookie
    """

    response_cookies = response.cookies
    if response_cookies:
        session_id = response_cookies.get("session-id")
        session_id_time = response_cookies.get("session-id-time")
        i_pref = response_cookies.get("i18n-prefs")
        sp_cdn = response_cookies.get("sp-cdn")
        ubid_main = response_cookies.get("ubid-main")
        session_token = response_cookies.get("session-token")
        if session_id:
            pre_cookies["session-id"] = session_id
        if session_id_time:
            pre_cookies["session-id-time"] = session_id_time
        if i_pref:
            pre_cookies["i18n-prefs"] = i_pref
        if sp_cdn:
            pre_cookies["sp-cdn"] = sp_cdn
        if ubid_main:
            pre_cookies["ubid-main"] = ubid_main
        ue_id = re.findall("ar ue_id = '(.*?)',", response.text)
        if ue_id and len(ue_id) > 0:
            ue_id = ue_id[0]
            pre_csm_hit = pre_cookies.get("csm-hit")
            if pre_csm_hit:
                pre_csm_hit_one = re.findall(r"tb:s-(.+?)\|", str(pre_cookies["csm-hit"]))
                pre_csm_hit_two = re.findall(r"tb:(.+?)\+s", str(pre_cookies["csm-hit"]))
                if pre_csm_hit_one and len(pre_csm_hit_one) > 0:
                    pre_cookies["csm-hit"] = "tb:" + pre_csm_hit_one[0] + "+s-" + ue_id + "|" + str(
                        int(time.time() * 1000)) + '&t:' + str(
                        int(time.time() * 1000)) + "&adb:adblk_no"
                elif pre_csm_hit_two and len(pre_csm_hit_two) > 0:
                    pre_cookies["csm-hit"] = "tb:" + pre_csm_hit_two[0] + "+s-" + ue_id + "|" + str(
                        int(time.time() * 1000)) + '&t:' + str(
                        int(time.time() * 1000)) + "&adb:adblk_no"
            else:
                pre_cookies["csm-hit"] = "tb:s-" + ue_id + "|" + str(int(time.time() * 1000)) + '&t:' + str(
                    int(time.time() * 1000)) + "&adb:adblk_no"
        if session_token:
            pre_cookies["session-token"] = session_token
        print(pre_cookies)
        return pre_cookies

def get_rendered_address(cookies, glow_token):
    """
    get-rendered—address-selections接口获取response从而获取SRF_TOKEN
    :param cookies: 老的cookies
    :param glow_token: 所在页面返回的glow_token
    :return: response
    """
    headers = {
        "Host": "www.amazon.com",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-device-memory": "8",
        "sec-ch-viewport-width": "1606",
        "sec-ch-ua-platform-version": "\"15.0.0\"",
        "x-requested-with": "XMLHttpRequest",
        "dpr": "1",
        "downlink": "10",
        "sec-ch-ua-platform": "\"Windows\"",
        "device-memory": "8",
        "anti-csrftoken-a2z": glow_token,
        "rtt": "100",
        "sec-ch-ua-mobile": "?0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "viewport-width": "1606",
        "accept": "text/html,*/*",
        "sec-ch-dpr": "1",
        "ect": "4g",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
        "accept-language": "en-US,en;q=0.9"
    }
    url = "https://www.amazon.com/portal-migration/hz/glow/get-rendered-address-selections"
    params = {
        "deviceType": "desktop",
        "pageType": "zeitgeist",
        "storeContext": "pc",
        "actionSource": "desktop-modal"
    }
    time.sleep(5)
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)
    print(response.status_code)
    print(response.cookies)
    return response

def address_change(cookies, a2z):
    headers = {
        "Host": "www.amazon.com",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-device-memory": "8",
        "sec-ch-viewport-width": "1606",
        "sec-ch-ua-platform-version": "\"15.0.0\"",
        "x-requested-with": "XMLHttpRequest",
        "dpr": "1",
        "downlink": "10",
        "sec-ch-ua-platform": "\"Windows\"",
        "device-memory": "8",
        "anti-csrftoken-a2z": a2z,
        "rtt": "100",
        "sec-ch-ua-mobile": "?0",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "viewport-width": "1606",
        "content-type": "application/json",
        "accept": "text/html,*/*",
        "sec-ch-dpr": "1",
        "ect": "4g",
        "origin": "https://www.amazon.com",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        "referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
        "accept-language": "en-US,en;q=0.9"
    }
    url = "https://www.amazon.com/portal-migration/hz/glow/address-change"
    params = {
        "actionSource": "glow"
    }
    data = {
        "locationType": "LOCATION_INPUT",
        "zipCode": "10014",
        "storeContext": "pc",
        "deviceType": "web",
        "pageType": "zeitgeist",
        "actionSource": "glow"
    }
    # 去除空格
    data = json.dumps(data, separators=(',', ':'))
    time.sleep(5)
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

    print(response.text)
    print(response)
    return response

def parse_page(response):
    page_item = []
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
        page_item.append(item)
    return page_item

def get_scroll_page_data(index, scroll_page, bs_category):
    scroll_page = json.loads(str(scroll_page))
    id_list = []
    index_list = []
    for item in scroll_page:
        if int(item["metadataMap"]["render.zg.rank"]) > index:
            index_list.append(int(item["metadataMap"]["render.zg.rank"]) - 1)
            # 注意字典顺序，json序列化为字符串后是有顺序的！
            id_item = {"id": item["id"], "metadataMap": item["metadataMap"], "linkParameters": {}}
            id_item = json.dumps(id_item,separators=(',', ':'))
            id_list.append(id_item)
    # offset = 0
    # if len(index_list) > 0:
    #     offset = index_list[0]
    data = {
        "faceoutkataname": "GeneralFaceout",
        "ids": id_list,
        "indexes": index_list,
        "linkparameters": "",
        "offset": index,
        "reftagprefix": bs_category
    }
    return data

def get_scroll_page_item(data, cookies, token, referer):
    headers_scroll = {
        "Accept": "text/html, application/json",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Device-Memory": "8",
        "Downlink": "10",
        "Dpr": "1",
        "Ect": "4g",
        "Origin": "https://www.amazon.com",
        "Pragma": "no-cache",
        "Referer": referer,
        "Rtt": "200",
        "Sec-Ch-Device-Memory": "8",
        "Sec-Ch-Dpr": "1",
        "Sec-Ch-Ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "\"Windows\"",
        "Sec-Ch-Ua-Platform-Version": "\"15.0.0\"",
        "Sec-Ch-Viewport-Width": "1135",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
        "Viewport-Width": "1135",
        "X-Amz-Acp-Params": token,
        "X-Requested-With": "XMLHttpRequest"
    }

    url_scroll = "https://www.amazon.com/acp/p13n-zg-list-grid-desktop/p13n-zg-list-grid-desktop-66060a50-59dd-41d8-a7cf-383304720513-1679651361432/nextPage"
    params_scroll = {
        "page-type": "undefined",
        "stamp": str(int(time.time() * 1000))
    }
    response_scroll = requests.post(url=url_scroll, headers=headers_scroll, params=params_scroll, cookies=cookies,
                                    json=data)
    print(response_scroll.status_code)
    print(response_scroll.text)

def get_token(response):
    if response.status_code == 200:
        token = re.findall('data-acp-params="(.*?)"', response.text)[0]
        return token

def get_next_page_url(html):
    next_page = ""
    page_url = html.xpath('//li[@class="a-last"]/a/@href')
    if page_url and isinstance(page_url, list) and len(page_url) > 0:
        next_page = "https://www.amazon.com" + page_url[0]
    return next_page

def get_page(response):
    html = etree.HTML(response.text)
    test_path = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
    if test_path:
        first_page_item = parse_page(response)
        scroll_page = html.xpath('//div[@class="p13n-desktop-grid"]/@data-client-recs-list')[0]
        bs_category = "zg_bs_300189"
        data = get_scroll_page_data(len(first_page_item), scroll_page, bs_category)
        token = get_token(response)
        scroll_page_item = get_scroll_page_item(data, cookies, token, url)
        # first_page_item += scroll_page_item
        next_page_url = get_next_page_url(html)
        return first_page_item, next_page_url
    else:
        pass


if __name__ == '__main__':
    headers = {
        "Host": "www.amazon.com",
        "pragma": "no-cache",
        "cache-control": "no-cache",
        "device-memory": "8",
        "sec-ch-device-memory": "8",
        "dpr": "1",
        "sec-ch-dpr": "1",
        "viewport-width": "1606",
        "sec-ch-viewport-width": "1606",
        "rtt": "200",
        "downlink": "1.45",
        "ect": "4g",
        "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"15.0.0\"",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-fetch-site": "none",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "accept-language": "en-US,en;q=0.9"
    }
    cookies = {

    }
    page_first = "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc"

    # 修改地址
    for i in range(3):
        response = requests.get(page_first, headers=headers, cookies=cookies)
        get_cookie(response, cookies)
        if response.status_code == 200:
            html = etree.HTML(response.text)
            test_path = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
            if test_path:
                glow_token = str(html.xpath("//input[@id='glowValidationToken']/@value")[0])
                get_rendered_address_response = get_rendered_address(cookies,glow_token)
                get_cookie(get_rendered_address_response, cookies)
                a2z = str(re.findall('CSRF_TOKEN : "(.*?)",', get_rendered_address_response.text)[0])
                address_change_response = address_change(cookies, a2z)
                get_cookie(get_rendered_address_response, cookies)
                break
    # 拿第二页地址和第一页的数据

    page_first_response = requests.get(page_first, headers=headers, cookies=cookies)
    # html = etree.HTML(page_first_response.text)
    # price_list = html.xpath(
    #     '//div[@class="zg-grid-general-faceout"]//span[@class="_cDEzb_p13n-sc-price_3mJ9Z"]/text()')
    # print(price_list)
    frist_page_data, next_page_url = get_page(page_first_response)

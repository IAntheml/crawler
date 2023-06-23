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
    time.sleep(10)
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
    response = requests.get(url, headers=headers, cookies=cookies, params=params)
    print(response.text)
    print(response.status_code)
    print(response.cookies)
    return response


def address_change(cookies, a2z):
    time.sleep(10)
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
    data = json.dumps(data, separators=(',', ':'))
    response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

    print(response.text)
    print(response)
    return response




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
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc"

for i in range(3):
    response = requests.get(url, headers=headers, cookies=cookies)
    get_cookie(response, cookies)
    if response.status_code == 200:
        html = etree.HTML(response.text)
        test_path = html.xpath('//div[@class="_cDEzb_p13n-sc-css-line-clamp-3_g3dy1"]/text()')
        if test_path:
            glow_token = str(html.xpath("//input[@id='glowValidationToken']/@value")[0])
            # change address
            # print(cookies)
            # print(test_path)
            print(glow_token)
            get_rendered_address_response = get_rendered_address(cookies,glow_token)
            get_cookie(get_rendered_address_response, cookies)
            a2z = str(re.findall('CSRF_TOKEN : "(.*?)",', get_rendered_address_response.text)[0])
            address_change_response = address_change(cookies, a2z)
            get_cookie(get_rendered_address_response, cookies)
            break

response = requests.get(url, headers=headers, cookies=cookies)
html = etree.HTML(response.text)
price_list = html.xpath(
    '//div[@class="zg-grid-general-faceout"]//span[@class="_cDEzb_p13n-sc-price_3mJ9Z"]/text()')
print(price_list)
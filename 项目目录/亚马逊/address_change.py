import requests
import re
import time
from lxml import etree

def get_cookie(response, cookie):
    cookies = response.cookies
    if cookies:
        session_id = cookies.get("session-id")
        session_id_time = cookies.get("session-id-time")
        i_pref = cookies.get("i18n-prefs")
        sp_cdn = cookies.get("sp-cdn")
        if session_id:
            cookie["session-id"] = session_id
        if session_id_time:
            cookie["session-id-time"] = session_id_time
        if i_pref:
            cookie["i18n-prefs"] = i_pref
        if sp_cdn:
            cookie["sp-cdn"] = sp_cdn
        if response.status_code == 429:
            return cookie
        elif response.status_code == 200:
            ubid_main = cookies.get("ubid-main")
            if ubid_main:
                cookie["ubid-main"] = ubid_main
            ue_id = re.findall("ar ue_id = '(.*?)',", response.text)[0]
            if ue_id:
                cookie["csm-hit"] = "tb:s-" + ue_id + "|" + str(int(time.time() * 1000)) + '&t:' + str(
                    int(time.time() * 1000)) + "&adb:adblk_no"
            return cookie

def change_address(cookies,zip_code,glow_token):
    headers = {
        "authority": "fls-na.amazon.com",
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "anti-csrftoken-a2z": glow_token,
        "cache-control": "no-cache",
        "device-memory": "8",
        "downlink": "0.65",
        "dpr": "0.8",
        "ect": "4g",
        "pragma": "no-cache",
        "referer": "https://www.amazon.com/",
        "rtt": "250",
        "sec-ch-device-memory": "8",
        "sec-ch-dpr": "0.8",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-ch-ua-platform-version": "^\\^15.0.0^^",
        "sec-ch-viewport-width": "387",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "same-site",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "viewport-width": "387",
        "x-requested-with": "XMLHttpRequest",
        "origin": "https://www.amazon.com",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "Content-Type": "text/plain;charset=UTF-8",
        "Origin": "https://www.amazon.com",
        "Pragma": "no-cache",
        "Referer": "https://www.amazon.com/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "content-type": "text/plain;charset=UTF-8"
    }
    url = "https://www.amazon.com/portal-migration/hz/glow/get-rendered-address-selections"
    params = {
        "deviceType": "desktop",
        "pageType": "zeitgeist",
        "storeContext": "pc",
        "actionSource": "desktop-modal"
    }
    response = requests.post(url, headers=headers, cookies=cookies, params=params)
    print(response.status_code)
    print(response.text)
    a2z = str(re.findall('CSRF_TOKEN: "(.*?)",', response.text)[0])
    headers = {
        "authority": "www.amazon.com",
        "accept": "text/html,*/*",
        "accept-language": "en-US,en;q=0.9",
        "anti-csrftoken-a2z": a2z,
        "cache-control": "no-cache",
        "content-type": "application/json",
        "device-memory": "8",
        "downlink": "1.45",
        "dpr": "0.8",
        "ect": "3g",
        "origin": "https://www.amazon.com",
        "pragma": "no-cache",
        "referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
        "rtt": "400",
        "sec-ch-device-memory": "8",
        "sec-ch-dpr": "0.8",
        "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Google",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "^\\^Windows^^",
        "sec-ch-ua-platform-version": "^\\^15.0.0^^",
        "sec-ch-viewport-width": "1267",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
        "viewport-width": "1267",
        "x-requested-with": "XMLHttpRequest"
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
    response = requests.post(url, headers=headers, cookies=cookies, params=params, json=data)

    print(response.text)
    print(response)

url = "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc"

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

cookies = {}



for i in range(3):
    response = requests.get(url, headers=headers_first, cookies=cookies)
    if response.status_code == 429:
        cookies = get_cookie(response, cookies)
        continue
    elif response.status_code == 200:
        html = etree.HTML(response.text)
        test_path = html.xpath(
        '//div[@class="zg-grid-general-faceout"]//span[@class="_cDEzb_p13n-sc-price_3mJ9Z"]/text()')
        cookies = get_cookie(response, cookies)
        if test_path:
            glow_token = html.xpath("//input[@id='glowValidationToken']/@value")

            print(glow_token)

            change_address(cookies, "10014", glow_token[0])

            response = requests.get(url, headers=headers_first, cookies=cookies)
        else:
            continue




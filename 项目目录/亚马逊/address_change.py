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
    "Accept": "text/html,*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Anti-Csrftoken-A2z": glow_token,
    "Cache-Control": "no-cache",
    "Device-Memory": "8",
    "Downlink": "1.3",
    "Dpr": "0.8",
    "Ect": "3g",
    "Pragma": "no-cache",
    "Referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
    "Rtt": "250",
    "Sec-Ch-Device-Memory": "8",
    "Sec-Ch-Dpr": "0.8",
    "Sec-Ch-Ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Ch-Ua-Platform-Version": "\"15.0.0\"",
    "Sec-Ch-Viewport-Width": "801",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Viewport-Width": "801",
    "X-Requested-With": "XMLHttpRequest"
}
    url = "https://www.amazon.com/portal-migration/hz/glow/get-rendered-address-selections"
    params = {
        "deviceType": "desktop",
        "pageType": "zeitgeist",
        "storeContext": "pc",
        "actionSource": "desktop-modal"
    }
    response = requests.post(url=url, headers=headers, cookies=cookies, params=params)
    print(response.status_code)
    print(response.text)
    a2z = str(re.findall('CSRF_TOKEN: "(.*?)",', response.text)[0])
    headers = {
    "Accept": "text/html,*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Anti-Csrftoken-A2z": a2z,
    "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Device-Memory": "8",
    "Downlink": "1.45",
    "Dpr": "0.8",
    "Ect": "3g",
    "Origin": "https://www.amazon.com",
    "Pragma": "no-cache",
    "Referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
    "Rtt": "300",
    "Sec-Ch-Device-Memory": "8",
    "Sec-Ch-Dpr": "0.8",
    "Sec-Ch-Ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Ch-Ua-Platform-Version": "\"15.0.0\"",
    "Sec-Ch-Viewport-Width": "801",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "Viewport-Width": "801",
    "X-Requested-With": "XMLHttpRequest"
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
            glow_token = str(html.xpath("//input[@id='glowValidationToken']/@value")[0])

            print(glow_token)

            change_address(cookies, "10014", glow_token)

            response = requests.get(url, headers=headers_first, cookies=cookies)
        else:
            continue

if __name__ == '__main__':
    cookies = {}
    for i in range(5):
        url = "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc"
        headers_first = {
            "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "sec-ch-ua": "^\\^Not.A/Brand^^;v=^\\^8^^, ^\\^Chromium^^;v=^\\^114^^, ^\\^Google",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "^\\^Windows^^",
            "sec-fetch-dest": "image",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
            "device-memory": "8",
            "downlink": "1.45",
            "dpr": "0.8",
            "ect": "3g",
            "referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011/ref=pd_zg_hrsr_pc",
            "rtt": "300",
            "sec-ch-device-memory": "8",
            "sec-ch-dpr": "0.8",
            "sec-ch-ua-platform-version": "^\\^15.0.0^^",
            "sec-ch-viewport-width": "801",
            "viewport-width": "801"
        }
        response = requests.get(url, headers=headers_first, cookies=cookies)
        if len(response.cookies.keys()) > 0:
            for key in response.cookies.keys():
                cookies[key] = response.cookies.get(key)
        if cookies.get("session-id") and cookies.get("session-id-time") and cookies.get("i18n-prefs") and cookies.get("ubid-main") and cookies.get("session-token") and cookies.get("csm-hit"):
            break
        else:
            continue
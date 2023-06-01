"""import requests


headers = {
    "authority": "www.amazon.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}

headers_sec = {
    "authority": "www.amazon.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "device-memory": "8",
    "downlink": "5.8",
    "dpr": "1",
    "ect": "4g",
    "pragma": "no-cache",
    "rtt": "200",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "1",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-ch-ua-platform-version": "^\\^15.0.0^^",
    "sec-ch-viewport-width": "487",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "viewport-width": "487"
}
cookies = {
    "session-id": "132-8812578-9490203",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "sp-cdn": "^\\^L5Z9:CN^^"
}
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"
response = requests.get(url, headers=headers_sec, cookies=cookies)

print(response.status_code)
print(response.text)
print(response)"""

import requests


headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
    "Accept-Encoding": "gzip, deflate, br",
    "DNT": "1",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "same-origin",
    "Sec-Fetch-User": "?1",
    "TE": "trailers",
    "Pragma": "no-cache",
    "Cache-Control": "no-cache"
}
cookies = {
    "session-id": "132-8941353-6862613",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "sp-cdn": "L5Z9:CN",
    "csm-hit": "tb:8C0PV9WB478MEQC0WNAB+s-H351ND075PREQNFMT1KK^|1681876800436&t:1681876800436&adb:adblk_no",
    "ubid-main": "134-7327429-3111024",
    "session-token": "o/pAGdEPnR3oI+H39EMrXiMV/IBNOet9oEAIzWOg5Gh7NLtcE7D97axwCXUO4LOSxi2oTcjLjfugdMfzEz2TEIQ/n7ZLj+ghaVq1NLsyID8SmmRz7gW8tx+fye0OdbXRaEa96pWIz2z27nGQ5XtuR2oJhDiwKGYISpEZ3CBXA1QbcaEnidVMgwBts+IGrifI7LGpM2HXLMQIZE3lul+2pv9R+j7RaK2pGWnZ32YME1U="
}
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.text)
print(response)




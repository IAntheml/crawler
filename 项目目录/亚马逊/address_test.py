"""import requests
from lxml import etree
import re
import time
headers = {
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
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"

response = requests.get(url, headers=headers)
cookies = response.cookies
session_id = cookies.get("session-id")
session_id_time = cookies.get("session-id-time")
i_pref = cookies.get("i18n-prefs")
sp_cdn = cookies.get("sp-cdn")
cookies = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn,
}
response = requests.get(url, headers=headers, cookies = cookies)
print(response.status_code)
response_text = response.text
ubid_main = response.cookies.get("ubid-main")
if ubid_main:
    cookies["ubid-main"] = ubid_main
ue_id = re.findall("ar ue_id = '(.*?)',", response_text)[0]
if ue_id:
    cookies["csm-hit"] = "tb:s-" + ue_id + "|" + str(int(time.time() * 1000)) + '&t:' + str(
        int(time.time() * 1000)) + "&adb:adblk_no"

response = requests.get(url, headers=headers, cookies = cookies)
html = etree.HTML(response_text)
response_address = html.xpath('//*[@id="glow-ingress-line2"]/text()')
print(response_address)
url = "https://www.amazon.com/portal-migration/hz/glow/address-change"
params = {
    "actionSource": "glow"
}
data = '^{^\\^locationType^^:^\\^LOCATION_INPUT^^,^\\^zipCode^^:^\\^10014^^,^\\^storeContext^^:^\\^pc^^,^\\^deviceType^^:^\\^web^^,^\\^pageType^^:^\\^zeitgeist^^,^\\^actionSource^^:^\\^glow^^^}'.encode(
    'unicode_escape')
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)

response_text = response.text
html = etree.HTML(response_text)
response_address = html.xpath('//*[@id="glow-ingress-line2"]/text()')
print(response_address)"""

import requests
from lxml import etree
import re
import time

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
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"
response = requests.get(url, headers=headers)

cookies = response.cookies

session_id = cookies.get("session-id")
session_id_time = cookies.get("session-id-time")
i_pref = cookies.get("i18n-prefs")
sp_cdn = cookies.get("sp-cdn")
cookies = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn,
}

print(cookies)

response = requests.get(url=url, headers=headers, cookies=cookies)
print(response.text)
html = etree.HTML(response.text)
response_address = html.xpath('//*[@id="glow-ingress-line2"]/text()')
print(response_address)


headers_address = {
    "Accept": "text/html,*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Anti-Csrftoken-A2z": "gG6dnYujHycoqSHb1HOhEBRjXmZjk8tJ7uitjCgAAAAMAAAAAGR/5rlyYXcAAAAA;hGb4EJfMlDNvENqUkmLtKzQkP6irHn+U937FhYu5YZHrAAAAAGR/5rkAAAAB",
    "Cache-Control": "no-cache",
    "Content-Length": "135",
    "Content-Type": "application/json",
    "Device-Memory": "8",
    "Downlink": "3.3",
    "Dpr": "0.8",
    "Ect": "4g",
    "Origin": "https://www.amazon.com",
    "Pragma": "no-cache",
    "Referer": "https://www.amazon.com/gp/bestsellers/pc/17935294011",
    "Rtt": "250",
    "Sec-Ch-Device-Memory": "8",
    "Sec-Ch-Dpr": "0.8",
    "Sec-Ch-Ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Ch-Ua-Platform-Version": "\"15.0.0\"",
    "Sec-Ch-Viewport-Width": "2400",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "Viewport-Width": "2400",
    "X-Requested-With": "XMLHttpRequest"
}

url_address = "https://www.amazon.com/portal-migration/hz/glow/address-change"
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
response = requests.post(url, headers=headers, cookies=cookies, params=params, data=data)
print(response.text)


response = requests.get(url=url, headers=headers, cookies=cookies)
print(response.text)
html = etree.HTML(response.text)
response_address = html.xpath('//*[@id="glow-ingress-line2"]/text()')
print(response_address)
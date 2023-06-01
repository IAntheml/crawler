import requests
from lxml import etree
import re
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
url = "https://www.amazon.com/Best-Sellers/zgbs"
response = requests.get(url, headers=headers)
cookies = response.cookies
session_id = cookies.get("session-id")
session_id_time = cookies.get("session-id-time")
i_pref = cookies.get("i18n-prefs")
sp_cdn = cookies.get("sp-cdn")

cookies_sec = {
    "session-id": session_id,
    "session-id-time": session_id_time,
    "i18n-prefs": i_pref,
    "sp-cdn": sp_cdn
}

response = requests.get(url, headers=headers, cookies=cookies_sec)
token_response = response.text
print(response.status_code)
# print(response.text)
html = etree.HTML(token_response)
catalog_list = html.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[2]/div/a/@href')

# 获取二级菜单所有连接
catalog_url_list = []

for catalog in catalog_list:
    print(catalog)
    catalog_url = "https://www.amazon.com/" + catalog
    catalog_url_list.append(catalog_url)

print(catalog_url_list)

# 获取token

token = re.findall('data-acp-params="(.*?)"', token_response)[0]
"""
"""

""

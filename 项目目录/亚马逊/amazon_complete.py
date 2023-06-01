import requests
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

print(response.status_code)
# print(response.text)
html = etree.HTML(response.text)
catalog_list = html.xpath('/html/body/div[1]/div[2]/div[2]/div/div/div/div[2]/div/div[2]/div/div/div[2]/div/a/@href')

# 获取二级菜单所有连接
catalog_url_list = []

for catalog in catalog_list:
    print(catalog)
    catalog_url = "https://www.amazon.com/" + catalog
    catalog_url_list.append(catalog_url)

print(catalog_url_list)

# 获取token
"""
data-acp-params="tok=tzjJDJCRV9cxP9a5vF0V5LEnSAowllsu5mFyyRWMf_c;ts=1685613108254;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
data-acp-params="tok=tzjJDJCRV9cxP9a5vF0V5LEnSAowllsu5mFyyRWMf_c;ts=1685613108254;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
data-acp-params="tok=zdf66t8ugzSEIafwk4UGecPDZTXtPUy1mTkumLp2muY;ts=1685613108256;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
data-acp-params="tok=0AihgDpky6B4Ypx5x_pckwq6YJa9EP8uEhTs5a6kDZQ;ts=1685613108260;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
data-acp-params="tok=zdf66t8ugzSEIafwk4UGecPDZTXtPUy1mTkumLp2muY;ts=1685613108256;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
data-acp-params="tok=7pYnjS9JHDwCS0ynwEuwFp7TMASKVKXZeIuTvjSPK9A;ts=1685613108255;rid=GER8BJF1PH501EFQCT8W;d1=816;d2=0;
"""

""

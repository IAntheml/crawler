import re

import requests
from lxml import etree
import json
import time


url = 'https://www.amazon.com/Best-Sellers-Automotive/zgbs/automotive/ref=zg_bs_pg_2'

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
cookies = {
    "session-id": "142-3903983-0868368",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "sp-cdn": '"L5Z9:CN"'
}

response = requests.get(url, headers=headers, cookies=cookies)

print(response.status_code)
# print(response.text)

token = re.findall('data-acp-params="(.*?)"', response.text)[0]

# print(token)

# html = etree.HTML(response.text)
# next_page = html.xpath('//div[@class="p13n-desktop-grid"]/@data-client-recs-list')[0]
# np = ""
# for s in next_page:
#     np = np + str(s)
# np = json.loads(np)
#
# id_list = {}
# for item in np:
#     print(item)
#     print(type(item))
#     id_list["id"] = np[0]["id"]
#     id_list["rank"] = np[0]["metadataMap"]["render.zg.rank"]
#
# print(id_list)

"""next_url = "https://www.amazon.com/acp/p13n-zg-list-grid-desktop/p13n-zg-list-grid-desktop-66060a50-59dd-41d8-a7cf-383304720513-1679651361432/nextPage"

headers = {
    "Accept": "text/html, application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    "Cache-Control": "no-cache",
    "Content-Length": "2268",
    "Content-Type": "application/json",
    "Cookie": "session-id=142-3903983-0868368; session-id-time=2082787201l; i18n-prefs=USD; sp-cdn=\"L5Z9:CN\"; ubid-main=130-0795449-8884852; session-token=OYeFS47UYPv1JzviM1IK6TOXaRPYo4hjwH+pLnIc256r+xm0F+C4BeKE4na7cdndwTz+ek2RhUor79EERC8MjaUh+9nC6aLgVrMZ11lwQqg0+R+GL4IL+gv99rom9qBTZHapEsBR7m/pKt5yVMEYlpX1KuW3C4qx3MPqSBaFCMYu1sSYsrG9YznLTwxp8RqEkrM6MOpqQF+dGt3EOdgt5MmcTHQX9Cr+ZqFQ0n5no7Y=; csm-hit=tb:5G4HDMJ9B37KB40KD4TN+s-T4KJGXTPDZ2W17X54QPN|1685598806500&t:1685598806500&adb:adblk_no",
    "Device-Memory": "8",
    "Downlink": "0.6",
    "Dpr": "0.8",
    "Ect": "3g",
    "Origin": "https://www.amazon.com",
    "Pragma": "no-cache",
    "Referer": "https://www.amazon.com/Best-Sellers-Automotive/zgbs/automotive/ref=zg_bs_pg_2",
    "Rtt": "300",
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
    "X-Amz-Acp-Params": "tok=-cvEz1YlP7QD_8sPXS20KRuyj3xsKh45ZWcod46wGMI;ts=1685598729249;rid=T4KJGXTPDZ2W17X54QPN;d1=368;d2=0",
    "X-Requested-With": "XMLHttpRequest"
}
# cookies = {
#     "session-id": "142-3903983-0868368",
#     "session-id-time": "2082787201l",
#     "i18n-prefs": "USD",
#     "sp-cdn": '"L5Z9:CN"'
# }
params = {
    "page-type": "undefined",
    "stamp": "1685598729422"
}
data = {
    "faceoutkataname": "GeneralFaceout",
    "ids": [
        "{\"id\":\"B00BYH6C1E\",\"metadataMap\":{\"render.zg.rank\":\"31\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B0C4DY6V14\",\"metadataMap\":{\"render.zg.rank\":\"32\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B000CETHT4\",\"metadataMap\":{\"render.zg.rank\":\"33\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B084RQKLV8\",\"metadataMap\":{\"render.zg.rank\":\"34\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B071FRWWRF\",\"metadataMap\":{\"render.zg.rank\":\"35\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B07YZFM2FQ\",\"metadataMap\":{\"render.zg.rank\":\"36\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B08RDNV8KQ\",\"metadataMap\":{\"render.zg.rank\":\"37\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B0C58XYGQ6\",\"metadataMap\":{\"render.zg.rank\":\"38\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"
    ],
    "indexes": [
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37
    ],
    "linkparameters": "",
    "offset": "30",
    "reftagprefix": "zg_bs_automotive"
}

response = requests.post(url=next_url, headers=headers,data=data)
# response = requests.post(url=next_url, headers=headers, cookies=cookies,data=data)
print(response.status_code)
print(response.text)"""


headers_next = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
    "Accept": "text/html, application/json",
    "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
    "Accept-Encoding": "gzip, deflate, br",
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    "x-amz-acp-params": token,
    "Origin": "https://www.amazon.com",
    "Connection": "keep-alive",
    "Referer": "https://www.amazon.com/Best-Sellers-Automotive/zgbs/automotive/ref=zg_bs_pg_2",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "TE": "trailers"
}
cookies_next = {
    "session-id": "133-6494317-5655160",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "ubid-main": "133-8848849-0563201",
    "csm-hit": "tb:HHGJ2HZ9KQBT34PCSA4V+s-HHGJ2HZ9KQBT34PCSA4V^|1685602237231&t:1685602237231&adb:adblk_no",
    "session-token": "8mbVJucvEFRIaLCy7xUSeJQgI9JY+G/sEKgedaiVPMXEN2DwxljoODatvIWTLRw3Js4TNE7WelPX4PYPo3jgb03aE8dMZlsRt/W2C+PDGKE3shzEnwirDvgIbmnfiNoMD4upVElTrds8b6cZpq5dqNik2YjqeVOd4VrmokV+Qb26anzN8mzkCGGEhWKi9rhxpHKfJzhgyw+IsxKiNzoyNshx/+r1m/q+GK01o/ZI5K02HRiQo2ZVyrqtOKuYVNlQb2ehsD/oDMc=",
    "x-main": "vEBQHnZrc?lUCxPT2IzE^@q1o0rLarf49pFhDEJrq^@S11n2Pt4ytDtBWHAN2ug6hY",
    "at-main": "Atza^|IwEBIE_GsMEvxjWD22lOFdKN9JkmMLpIZSBTrzZ85PQmyJ7NOhhMQMEVDjFp3WEdg9pY_i1x4Lf4Z13m-DNiuQ5kWXStNzauAQKhDyT0-luvOhla7EueSNvRz0FzQterCBMnlpB6mOssEB3twGjAr26xXGS8O1t4-MxlbfnblN8mkKKAN-0Hgzr7YLDmIwDHipr7nc_wFq4Dn9_jrEGo__F2Xy26VZezGPuiDbNwNV_qlPIA_etJD81vo6f1QQ0HEisM9_dEk0WbR4eXSzBxgBTgQMdvH_XU8LZI-rh6z4frTm1y7w",
    "sess-at-main": "HmD7QWZDUZMkNs+tAT43BQNnrtdi1t/ADlDRmKhkfks=",
    "sst-main": "Sst1^|PQF1Ki_6LaP9prDpo4OhvxAMCW1F2hFH3wzScPsCkl6NZribnbngGKja8wmkE_UyC8T8gjFYZ_uaTVzaITk8h0zhDu-xgzfbAirrvr5v-TsN2xopI_gtt6BMRhZYqjYzu-_T_qdF0MUebmx-t8otTSa6cyxaUkWWniCk_cnl_h-WNut41bFNlOG5a76oygz7ghu5Z7Q_3ejIC8C-vd87GoWu1C-8SR_OqO_0DRPzDH6xUfL1Sk7rIkoxtshSn8fYKtIEUTNX1uJTk2ys4M3ZW7_u075i7-Y0FqjQ-hX_tdAoZv4",
    "lc-main": "en_US"
}

url_next = "https://www.amazon.com/acp/p13n-zg-list-grid-desktop/p13n-zg-list-grid-desktop-66060a50-59dd-41d8-a7cf-383304720513-1679651361432/nextPage"
params_next = {
    "page-type": "undefined",
    "stamp": str(time.time())
}
data_next = {
    "faceoutkataname": "GeneralFaceout",
    "ids": [
        "{\"id\":\"B00BYH6C1E\",\"metadataMap\":{\"render.zg.rank\":\"31\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B0C4DY6V14\",\"metadataMap\":{\"render.zg.rank\":\"32\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B000CETHT4\",\"metadataMap\":{\"render.zg.rank\":\"33\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B084RQKLV8\",\"metadataMap\":{\"render.zg.rank\":\"34\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B071FRWWRF\",\"metadataMap\":{\"render.zg.rank\":\"35\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B07YZFM2FQ\",\"metadataMap\":{\"render.zg.rank\":\"36\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B08RDNV8KQ\",\"metadataMap\":{\"render.zg.rank\":\"37\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}",
        "{\"id\":\"B0C58XYGQ6\",\"metadataMap\":{\"render.zg.rank\":\"38\",\"render.zg.bsms.currentSalesRank\":\"\",\"render.zg.bsms.percentageChange\":\"\",\"render.zg.bsms.twentyFourHourOldSalesRank\":\"\",\"disablePercolateLinkParams\":\"true\"},\"linkParameters\":{}}"
    ],
    "indexes": [
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37
    ],
    "linkparameters": "",
    "offset": "30",
    "reftagprefix": "zg_bs_automotive"
}
response = requests.post(url_next, headers=headers_next, params=params_next, json=data_next)

print(response.text)
print(response)

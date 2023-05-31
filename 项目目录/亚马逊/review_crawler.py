import requests

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
url = "https://www.amazon.com/gp/bestsellers/pc/17935294011"
response = requests.get(url, headers=headers)
cookies = response.cookies

session_id = cookies.get("session-id")
session_id_time = cookies.get("session-id-time")
i_pref = cookies.get("i18n-prefs")
sp_cdn = cookies.get("sp-cdn")
print(response.text)

# cookies = {
#     "session-id": session_id,
#     "session-id-time": session_id_time,
#     "i18n-prefs": i_pref,
#     "sp-cdn": sp_cdn,
#     # "csm-hit": "tb:8C0PV9WB478MEQC0WNAB+s-H351ND075PREQNFMT1KK^|1681876800436&t:1681876800436&adb:adblk_no",
#     # "ubid-main": "134-7327429-3111024",
#     # "session-token": "o/pAGdEPnR3oI+H39EMrXiMV/IBNOet9oEAIzWOg5Gh7NLtcE7D97axwCXUO4LOSxi2oTcjLjfugdMfzEz2TEIQ/n7ZLj+ghaVq1NLsyID8SmmRz7gW8tx+fye0OdbXRaEa96pWIz2z27nGQ5XtuR2oJhDiwKGYISpEZ3CBXA1QbcaEnidVMgwBts+IGrifI7LGpM2HXLMQIZE3lul+2pv9R+j7RaK2pGWnZ32YME1U="
# }
#
# response = requests.get(url, headers=headers,cookies = cookies)
# print(response.status_code)
# print(response.text)
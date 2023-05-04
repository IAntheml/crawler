import time

import requests

url = "https://gateway.36kr.com/api/mus/login/byMobilePassword"

headers = {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "460",
    "Content-Type": "application/json",
    "Host": "gateway.36kr.com",
    "Origin": "https://36kr.com",
    "Pragma": "no-cache",
    "Referer": "https://36kr.com/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}

user_name = "13278883128"
password = "llhqq393089025"
def getAccountAndPassword(user_name,password):

    return user_name, password

mobileNo,password = getAccountAndPassword()

data = {
    "krtoken": "",
    "partner_id": "web",
    "timestamp": time.time(),
    "param": {
        "countryCode": "86",
        "mobileNo": mobileNo,
        "password": password
    }
}


response = requests.post(url,headers=headers,json=data)
print(response.status_code)
print(response.json())

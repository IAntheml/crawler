import json
import execjs
import requests
homepage_url = "https://ec.minmetals.com.cn/open/homepage/public"
homepage_headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "0",
    "Host": "ec.minmetals.com.cn",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/?tabIndex=1",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
response = requests.post(homepage_url, headers=homepage_headers)
public_key = response.text

url = "https://ec.minmetals.com.cn/open/homepage/zbs/by-lx-page"
headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Length": "696",
    "Content-Type": "application/json",
    "Cookie": "SUNWAY-ESCM-COOKIE=6083ff7f-8ca8-46df-a76e-5cd03bddd270; __jsluid_s=3229e51f6fd4c8fd45e96eaf2d416294",
    "Host": "ec.minmetals.com.cn",
    "Origin": "https://ec.minmetals.com.cn",
    "Pragma": "no-cache",
    "Referer": "https://ec.minmetals.com.cn/open/home/purchase-info/?tabIndex=1",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
e = {
    "inviteMethod": "",
    "businessClassfication": "",
    "mc": "",
    "lx": "CQGG",
    "dwmc": "",
    "pageIndex": 1
}
def get_data(public_key, index):
    with open("wukuang.js", "r", encoding="utf-8") as f:
        wk_js = f.read()
        js_code_compile = execjs.compile(wk_js)
        # print(public_key, index)
        param = js_code_compile.call("get_encode", public_key, index)
        print(param)
        return param


data = get_data(public_key, json.dumps(e))
payload = {
    "param": data
}
print(payload)
#
response = requests.post(url, headers=headers, json=payload)
print(response.status_code)
print(response.text)

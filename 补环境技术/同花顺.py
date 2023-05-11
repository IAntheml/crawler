import requests

headers = {
    "Accept": "text/html, */*; q=0.01",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cache-Control": "no-cache",
    # "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "http://q.10jqka.com.cn/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest"
    # "hexin-v": "AytTYCLOyybdUxd67h4FWZ9EukQQQD6quVYDcJ2pB7LAhUW6JRDPEskknnOu"
}
cookies = {
    "v": "AytTYCLOyybdUxd67h4FWZ9EukQQQD6quVYDcJ2pB7LAhUW6JRDPEskknnOu"
}
url = "http://q.10jqka.com.cn/index/index/board/hs/field/zdf/order/desc/page/1/ajax/1/"
response = requests.get(url, headers=headers, cookies=cookies, verify=False)

print(response.text)
print(response)

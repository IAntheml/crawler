import requests

res = requests.post(
    url="https://api.zhihu.com/guests/token",
    data={
        "source": "com.zhihu.android"
    },
    headers={
        "x-udid": "AGBQ9YDFAxRLBel97ZJuRX4mzPE3_trJT4k=",
        "user-agent": "ZhihuHybrid com.zhihu.android/Futureve/5.32.1 Mozilla/5.0 (Linux; Android 10; Redmi 8A Build/QKQ1.191014.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
        'x-app-version': "5.32.1"
    },
)

print(res.text)

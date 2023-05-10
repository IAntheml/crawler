import requests

headers = {
    "authority": "www.toutiao.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.toutiao.com/",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
cookies = {
    "__ac_signature": "_02B4Z6wo00f01uqbnlgAAIDDtdhxgynW4Jbqu5rAAN6gf3",
    "tt_webid": "7220417189583717944",
    "ttcid": "23e7e148f5ee458fa46b1f92f86478a218",
    "csrftoken": "7fbf1cac8e6fd7b37ac30d69f65dfc43",
    "_ga": "GA1.1.1146210138.1681134393",
    "s_v_web_id": "verify_lgaw0fap_pE2hQixY_6tBa_48hC_9rUV_gf8VZTW7I60H",
    "local_city_cache": "^%^E6^%^B7^%^B1^%^E5^%^9C^%^B3",
    "_ga_QEHZPBE5HH": "GS1.1.1683733486.3.0.1683733486.0.0.0",
    "ttwid": "1^%^7CoS_lLkd6FN4Yu9rl_8FVkOu3s_XGCkyobE6V8NMi2AI^%^7C1683733486^%^7C451082e24fd8c1cf0211b4fd013a88aad371a47848b4393585b855dc79492f51",
    "tt_scid": "a9uDzHZbpm4MrSNPrjHk6vikSZeG6T0YTxPp1L7VF8DU0yiJEBhN9EphO.Ec2fL8d781"
}
url = "https://www.toutiao.com/hot-event/hot-board/"
params = {
    "origin": "toutiao_pc",
    "_signature": "_02B4Z6wo00101UAZVrAAAIDAH1q5aXX1wPVAPVIAADRhAajBgzShNANxOF4aKdvHFfXm9OMmCTCKtQBcH12I9CdEkITsEg0nWDOJlpLCz5rikdsU64F8KwRgDy5oFgdRF0TxUFZbDSsU6cZEe1"
}
url_feed = "https://www.toutiao.com/api/pc/list/feed"
headers_feed = {
    "authority": "www.toutiao.com",
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "referer": "https://www.toutiao.com/",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
}
param_feed = {
    "channel_id": "3189398999",
    "min_behot_time": "0",
    "offset": "0",
    "refresh_count": "1",
    "category": "pc_profile_channel",
    "client_extra_params": "{\"short_video_item\":\"filter\"}",
    "aid": "24",
    "app_name": "toutiao_web",
    "_signature": "_02B4Z6wo00101UAZVrAAAIDAH1q5aXX0Cv1APVIAADRhAajBgzShNANxOF4aKdvHFfXm9OMmCTCKtQBcH12I9CdEkITsEg0nWDOJlpLCz5rikdsU64F8KwRgDy5oFgdRF0TxUFZbDSsU6cZE1f"
}
cookies_feed = {
    "__ac_signature": "_02B4Z6wo00f01uqbnlgAAIDDtdhxgynW4Jbqu5rAAN6gf3",
    "tt_webid": "7220417189583717944",
    "ttcid": "23e7e148f5ee458fa46b1f92f86478a218",
    "csrftoken": "7fbf1cac8e6fd7b37ac30d69f65dfc43",
    "_ga": "GA1.1.1146210138.1681134393",
    "s_v_web_id": "verify_lgaw0fap_pE2hQixY_6tBa_48hC_9rUV_gf8VZTW7I60H",
    "local_city_cache": "^%^E6^%^B7^%^B1^%^E5^%^9C^%^B3",
    "_ga_QEHZPBE5HH": "GS1.1.1683733486.3.0.1683733486.0.0.0",
    "ttwid": "1^%^7CoS_lLkd6FN4Yu9rl_8FVkOu3s_XGCkyobE6V8NMi2AI^%^7C1683733486^%^7C451082e24fd8c1cf0211b4fd013a88aad371a47848b4393585b855dc79492f51",
    "tt_scid": "a9uDzHZbpm4MrSNPrjHk6vikSZeG6T0YTxPp1L7VF8DU0yiJEBhN9EphO.Ec2fL8d781"
}

response = requests.get(url_feed, headers=headers_feed, params=param_feed, cookies=cookies_feed)
print(response.status_code)
print(response.text)

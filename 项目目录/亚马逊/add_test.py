import time
import re
import requests


headers = {
    "Host": "www.amazon.com",
    "pragma": "no-cache",
    "cache-control": "no-cache",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-device-memory": "8",
    "sec-ch-viewport-width": "441",
    "sec-ch-ua-platform-version": "\"15.0.0\"",
    "x-requested-with": "XMLHttpRequest",
    "dpr": "0.8",
    "downlink": "1.5",
    "sec-ch-ua-platform": "\"Windows\"",
    "device-memory": "8",
    "anti-csrftoken-a2z": "gIN0x/rSqqXnRbtsi4HkZPCR4WfskKeZdOdqaYEAAAAMAAAAAGSSsAZyYXcAAAAA;hF3Z1ziLZXLsbiqE08N22cWQ5wo5xkEdZWuYzdgRZzbgAAAAAGSSsAYAAAAB",
    "rtt": "350",
    "sec-ch-ua-mobile": "?0",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    "viewport-width": "441",
    "accept": "text/html,*/*",
    "sec-ch-dpr": "0.8",
    "ect": "3g",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "referer": "https://www.amazon.com/Best-Sellers-Computers-Accessories-Whole-Home-Mesh-Wi-Fi-Systems/zgbs/pc/17935294011/ref=zg_bs_pg_1?_encoding=UTF8&pg=1",
    "accept-language": "en-US,en;q=0.9"
}
cookies = {
    "session-id": "142-5478220-5351743",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "sp-cdn": "\"L5Z9:CN\"",
    "ubid-main": "131-0204722-3194527",
    "session-token": "\"iqSciZGXOY93IGRTMcnUm4PtWh8TOk/AMNw7NZkhroltsFR/XQFe1ls+HNt55EsFk77hz4udGlE8TjFHF+3h4fMf3NXGEU40r2VY4DiZCLHHcZRaWzsLPRpRsnfE/5rYXu9Nl8R6mjWaehGlmGRWfNfl5Z019DcX0pL+wgzOVhysIThAcnBjQ8VfVHcKyCHwsK5VF2la5HLkfn2//Nco1/+bApGXme2CbzStbQrx/jY=\"",
    "csm-hit": "tb:A4KJYA88Y6GF94VW485Y+s-G211ZA384XCQR11BWS92|1687335139318&t:1687335139318&adb:adblk_no"
}
url = "https://www.amazon.com/portal-migration/hz/glow/get-rendered-address-selections"
params = {
    "deviceType": "desktop",
    "pageType": "zeitgeist",
    "storeContext": "pc",
    "actionSource": "desktop-modal"
}
response = requests.get(url, headers=headers, cookies=cookies, params=params)
token = re.findall('CSRF_TOKEN: "(.*?)",', response.text)
print(token)
print(response.text)
print(response)
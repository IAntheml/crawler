import requests


headers = {
    "authority": "www.amazon.com",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "device-memory": "8",
    "downlink": "1.35",
    "dpr": "1",
    "ect": "3g",
    "pragma": "no-cache",
    "rtt": "400",
    "sec-ch-device-memory": "8",
    "sec-ch-dpr": "1",
    "sec-ch-ua": "^\\^Google",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "^\\^Windows^^",
    "sec-ch-ua-platform-version": "^\\^15.0.0^^",
    "sec-ch-viewport-width": "719",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
    "viewport-width": "719"
}
cookies = {
    "session-id": "142-5745479-3517763",
    "session-id-time": "2082787201l",
    "i18n-prefs": "USD",
    "ubid-main": "130-6664348-6276527",
    "session-token": "^\\^uO7/dRhivyi9UmKpC9qdQ4pYw2/vHv/QLdbQ/ncc/uTgWlahjNCYuWP/0PpRGi6VfZOXxt11cHBTXjRWwKGDLd/56sSE6yakhI42/lGv76BtovCvPNTYsMzUdvzY2yDAxpbt6DApWY8BWSAyTs65H4NzFwGxBP79RBuEyYT6LHb2dZBbZgiL5i9J1QhJX9JUXszbvBvpzIPDXUss0ckOeJSCAx8CVtk8u66QeyvMu0A=^^",
    "csm-hit": "tb:K7ARK7H4T2HF7MDFNCBY+s-K7ARK7H4T2HF7MDFNCBY^|1684490008875&t:1684490008875&adb:adblk_no"
}
url = "https://www.amazon.com/TP-Link-Deco-Whole-System-2-Pack/product-reviews/B0797D6853"
response = requests.get(url, headers=headers, cookies=cookies)

print(response.status_code)
print(response.text)
print(response)

import requests

proxies = {'http': 'http://218.14.12.191:24001'}
response = requests.get('http://httpbin.org/ip', proxies=proxies)
print(response.text)
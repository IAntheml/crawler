import requests
from lxml import etree


class IpCool:

    def __init__(self):
        self.base_url = 'https://www.89ip.cn/index_{}.html'
        self.test_url = 'http://httpbin.org/ip'
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
        }
        self.IPS = []

    def get_data(self):
        for i in range(1, 2):
            response = requests.get(self.base_url.format(i), headers=self.headers)
            self.parse_data(response.text)

    def parse_data(self, data):
        html = etree.HTML(data)
        tr_list = html.xpath('//table//tbody/tr')
        for tr in tr_list:
            ip_add = {'ip': str(tr.xpath('./td[1]/text()')[0]).strip(), 'port': str(tr.xpath('./td[2]/text()')[0]).strip()}
            self.test_ip(ip_add)

    def test_ip(self, ip_add):
        proxies = {'http': 'http://' + ip_add['ip'] + ':' + ip_add['port']}
        try:
            print(proxies)
            response = requests.get(url=self.test_url, headers=self.headers, proxies=proxies, timeout=2)
            if response.status_code == 200:
                print(response.status_code)
                print(response.text)
                self.IPS.append(proxies)
        except Exception:
            print("链接超时")

    def run(self):
        self.get_data()
        print(self.IPS)


if __name__ == '__main__':
    dl = IpCool()
    dl.run()

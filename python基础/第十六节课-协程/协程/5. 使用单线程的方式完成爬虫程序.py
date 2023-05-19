# -*- coding: utf-8 -*-
# @Time: 9:09 下午
# @Author: 顾安
# @File: 5. 使用单线程的方式完成爬虫程序
# Software: PyCharm
# pip install requests
import requests  # 同步爬虫库


def download_image(url):
    print('开始下载: ', url)
    response = requests.get(url)
    print('下载完成...')

    # 保存图片
    file_name = url.rsplit('/')[-1]
    with open(file_name, mode='wb') as f:
        f.write(response.content)


if __name__ == '__main__':
    url_list = [
        'http://pic.bizhi360.com/bbpic/98/10798.jpg',
        'http://pic.bizhi360.com/bbpic/92/10792.jpg',
        'http://pic.bizhi360.com/bbpic/86/10386.jpg'
    ]
    for item in url_list:
        download_image(item)

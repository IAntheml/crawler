# -*- coding: utf-8 -*-
# @Time: 9:14 下午
# @Author: 顾安
# @File: 6. 使用sayncio进程爬虫代码加速
# Software: PyCharm


import aiohttp  # 异步爬虫库
import asyncio


async def download_image(session, url):
    print('发送请求: ', url)
    async with session.get(url, verify_ssl=False) as response:
        content = await response.content.read()
        file_name = url.rsplit('/')[-1]
        with open(file_name, mode='wb') as f:
            # 文件读写是不是一个IO操作？
            f.write(content)


async def main():
    async with aiohttp.ClientSession() as session:
        url_list = [
            'http://pic.bizhi360.com/bbpic/98/10798.jpg',
            'http://pic.bizhi360.com/bbpic/92/10792.jpg',
            'http://pic.bizhi360.com/bbpic/86/10386.jpg'
        ]

        tasks = [asyncio.create_task(download_image(session, url)) for url in url_list]
        await asyncio.wait(tasks)


if __name__ == '__main__':
    asyncio.run(main())

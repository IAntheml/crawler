# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午10:26
# @Author : 顾安
# @File : 8. 使用上下文管理器进行文件的关闭.py
# @Software: PyCharm


path = 'test.txt'

with open(path, 'r') as f:
    print(f.read())
    # 如果使用with 就可以不用去写close方法了

# 只要你的类实现了上下文管理器的内置方法 就可以使用with
# 线程池
# aiohttp 异步爬虫库

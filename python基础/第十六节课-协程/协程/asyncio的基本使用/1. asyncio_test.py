# -*- coding: utf-8 -*-
# @Time: 9:32 下午
# @Author: 顾安
# @File: 1. asyncio_test
# Software: PyCharm


import asyncio


async def func():
    print('这是一个协程函数')


# 1. 获取协程对象
result = func()

# 2. 创建事件循环
loop = asyncio.get_event_loop()

# 3. 将协程对象放入到事件循环中运行
loop.run_until_complete(result)


# 如果大家在公司中发现项目解释器版本低于3.7

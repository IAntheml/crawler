# -*- coding: utf-8 -*-
# @Time: 9:35 下午
# @Author: 顾安
# @File: 2. new_asyncio_test
# Software: PyCharm


import asyncio


async def func():
    print('这是一个协程任务')


# 1. 获取协程对象
result = func()

# 2. 使用asyncio中到run方法自动创建事件循环
asyncio.run(result)

# -*- coding: utf-8 -*-
# @Time: 9:41 下午
# @Author: 顾安
# @File: 3. await的基本使用
# Software: PyCharm


import asyncio


async def func():
    print('开始协程任务...')
    # 模拟网络IO请求 如果当前文件中有其他的协程任务 则自动切换
    # await 如果没有接收到后面到代码返回值则一直堵塞 直到有返回值返回
    response = await asyncio.sleep(2)
    print('任务结束: ', response)


asyncio.run(func())


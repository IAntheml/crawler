# -*- coding: utf-8 -*-
# @Time: 9:45 下午
# @Author: 顾安
# @File: 2. await关键字的探究
# Software: PyCharm

import asyncio


async def others():
    print('start...')
    await asyncio.sleep(2)
    print('end...')
    return '这是一个协程函数的返回值'


async def func():
    print('执行协程函数内部代码...')
    # 可以通过await执行其他协程函数对象
    # await 本质就是等待
    response_1 = await others()
    print(response_1)

    response_2 = await others()
    print(response_2)


asyncio.run(func())

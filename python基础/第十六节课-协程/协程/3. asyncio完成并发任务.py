# -*- coding: utf-8 -*-
# @Time: 8:23 下午
# @Author: 顾安
# @File: 3. asyncio完成并发任务
# Software: PyCharm

# python标准库
import asyncio


@asyncio.coroutine
def func_1():
    print(1)
    # 手动到进行任务切换
    yield from asyncio.sleep(2)
    print(2)


@asyncio.coroutine
def func_2():
    print(3)
    yield from asyncio.sleep(2)
    print(4)


tasks = [
    asyncio.ensure_future(func_1()),
    asyncio.ensure_future(func_2())
]

# 创建了一个容器 事件循环
loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.wait(tasks))

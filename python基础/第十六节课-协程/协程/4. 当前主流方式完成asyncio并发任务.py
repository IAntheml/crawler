# -*- coding: utf-8 -*-
# @Time: 8:46 下午
# @Author: 顾安
# @File: 4. 当前主流方式完成asyncio并发任务
# Software: PyCharm


import asyncio


# 创建协程函数
async def func_1():
    print(1)
    # await 相当于之前看到的yield from
    await asyncio.sleep(2)  # 等待两秒钟 并获取sleep这个方法的返回值之后才会解堵塞
    print(2)


async def func_2():
    print(3)
    await asyncio.sleep(1)
    print(4)


"""
1. 如果一个函数被async声明 则当前的函数是一个协程函数对象
2. 协程函数对象不能被直接调用
3. 如果想要去运行协程函数, 我们需要借助事件循环去运行当前的协程函数
4. await
    await是协程中的一个关键字 作用是:等待一些耗时任务并拿到这些任务的返回值之后才会解堵塞
5. 运行上述两个协程函数
6. 事件循环只能执行可以被等待的对象：协程对象 asyncio对象 task对象
"""

tasks = [
    # 将协程对象转为一个task对象用来进行并发执行
    asyncio.ensure_future(func_1()),
    asyncio.ensure_future(func_2())
]

# 创建完task对象之后需要借助事件循环去运行task对象
loop = asyncio.get_event_loop()
loop.run_until_complete(asyncio.wait(tasks))

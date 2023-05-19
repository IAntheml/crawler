# -*- coding: utf-8 -*-
# @Time: 9:57 下午
# @Author: 顾安
# @File: 5. Task 对象并发执行
# Software: PyCharm


import asyncio


async def func():
    print(1)
    await asyncio.sleep(2)
    print(2)
    return '这是协程函数的返回值'


async def main():
    print('开始任务...')
    # 创建task对象
    task_1 = asyncio.create_task(func())
    task_2 = asyncio.create_task(func())
    print('任务结束...')

    # 如果await执行的是一个task对象 那么他的执行方式为同步还是异步？
    # 遇到await进行任务切换
    # 如果是协程对象则同步切换
    # 如果是task对象则异步切换
    result_1 = await task_1
    result_2 = await task_2
    print(result_1, result_2)


asyncio.run(main())

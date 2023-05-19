# -*- coding: utf-8 -*-
# @Time: 10:05 下午
# @Author: 顾安
# @File: 6. 将task对象放入到任务列表中
# Software: PyCharm


import asyncio


async def func():
    print(1)
    await asyncio.sleep(2)
    print(2)
    return '这是一个协程函数的返回值'


async def main():
    print('开始任务...')
    # 将协程对象转为task对象并放入到一个任务列表中
    task_list = [
        asyncio.create_task(func()),
        asyncio.create_task(func())
    ]

    # 如果要运行列表中的任务需要将列表对象转为一个可以等待的对象
    # wait方法返回一个元组 函数返回值 任务的状态
    done, pending = await asyncio.wait(task_list)
    # 如果现在想要获取当前这个协程中的返回值怎么办？
    for item in done:
        # 当前拆包过后的done是一个集合
        print(item.result())


asyncio.run(main())

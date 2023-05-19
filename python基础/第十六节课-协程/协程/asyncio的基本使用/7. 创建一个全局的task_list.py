# -*- coding: utf-8 -*-
# @Time: 10:19 下午
# @Author: 顾安
# @File: 7. 创建一个全局的task_list
# Software: PyCharm


import asyncio


async def func():
    print(1)
    await asyncio.sleep(2)
    print(2)
    return '这是一个返回值'


task_list = [
    # 在列表中创建协程函数对象
    func(),
    func()
]

# task 对象创建时必须要保证事件循环已经存在
# run方法会自动创建task对象
done, pending = asyncio.run(asyncio.wait(task_list))
print(done)

"""
如果task_list是一个全局列表
    则不能在列表中创建task对象，只能传入协程函数对象
    因为创建task对象需要有事件循环的存在
"""
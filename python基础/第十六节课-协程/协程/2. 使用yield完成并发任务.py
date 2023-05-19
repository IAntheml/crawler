# -*- coding: utf-8 -*-
# @Time: 8:15 下午
# @Author: 顾安
# @File: 2. 使用yield完成并发任务
# Software: PyCharm


def func_1():
    yield 1
    yield from func_2()  # 切换
    yield 2


def func_2():
    yield 3
    # yield from func_1()
    yield 4


f1 = func_1()
for item in f1:
    print(item)

"""
任务切换功能
    1. 函数一切换到函数二之后不能手动的在函数二中切换到函数一
    2. 不能实现自动切换
"""
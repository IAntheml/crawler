# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:28 下午
# @Author  : 顾安
# @File    : 14. 对于封装的接单理解.py
# @Software: PyCharm


def add_1(num_1, num_2):
    return num_1 + num_2


def add_2(num_1, num_2):
    return num_1 - num_2


res = add_1(1, 2)
print(res)

res = add_2(2, 3)
print(res)


# 封装 在函数体中修改代码对其他的函数没有任何影响

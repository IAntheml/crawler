# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:06 下午
# @Author  : 顾安
# @File    : 8. 函数返回值的拆包操作.py
# @Software: PyCharm


def test():
    return 11, 22, 33, 44


a, b, c, d = test()  # 拆包
'''
return 返回的是一个元组
相当于：
    a, b, c, d = (11, 22, 33, 44)
'''
print(a, b, c, d)

# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:20 下午
# @Author  : 顾安
# @File    : 10. 通过星号进行参数的拆包.py
# @Software: PyCharm


def test(a, b, c):
    print(a + b + c)


nums = [1, 2, 3]
test(*nums)


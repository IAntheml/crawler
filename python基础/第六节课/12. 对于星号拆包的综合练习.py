# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:29 下午
# @Author  : 顾安
# @File    : 12. 对于星号拆包的综合练习.py
# @Software: PyCharm


def test_1(*args, **kwargs):
    print('----test_1函数----')
    print(f'args: {args}')
    print(f'kwargs: {kwargs}')


def test_2(*args, **kwargs):
    print('----test_2函数----')
    print(f'args: {args}')
    print(f'kwargs: {kwargs}')
    test_1(args, kwargs)  # 在函数2中调用函数1 那么函数2获取的值也需要通过星号进行传递


test_2(11, 22, 33, name='安娜', age=18)

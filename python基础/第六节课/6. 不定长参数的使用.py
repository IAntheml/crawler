# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 8:44 下午
# @Author  : 顾安
# @File    : 6. 不定长参数的使用.py
# @Software: PyCharm


def test(a, b, *args, **kwargs):
    print(f'当前a的值为: {a}, 类型是: {type(a)}')
    print(f'当前b的值为: {b}, 类型是: {type(b)}')
    print(f'当前args的值为: {args}, 类型是: {type(args)}')
    print(f'当前kwargs的值为: {kwargs}, 类型是: {type(kwargs)}')


# test(1, 2)
# test(1, 2, 3, 4)
test(1, 2, 3, name='顾安', address='长沙')


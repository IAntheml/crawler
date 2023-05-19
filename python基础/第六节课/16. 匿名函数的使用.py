# -*- coding: utf-8 -*-
# @Time    : 2022/10/11 8:12 下午
# @Author  : 顾安
# @File    : 16. 匿名函数的使用.py
# @Software: PyCharm


# 方式一
res = lambda a, b: a + b
res(1, 2)


# 方式二
def func(a, b, obj):
    print(f'a={a}')
    print(f'b={b}')
    print(f'result={obj(a, b)}')


# 匿名函数可以作为一个传统函数的实参进行传递
func(1, 2, lambda x, y: x + y)

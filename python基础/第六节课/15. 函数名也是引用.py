# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 10:05 下午
# @Author  : 顾安
# @File    : 15. 函数名也是引用.py
# @Software: PyCharm


def test_1():
    print('我是函数1')


def test_2():
    print('我是函数2')


test_1()
test_1 = test_2
test_1()

'''
函数() --> 运行函数

函数  -->  当前这个函数的引用 [当前在内存中的地址]
'''

print(test_1)  # 引用


# 静态语言定义的方向走
def test(a: int, b: str) -> ...:
    return a + b


print(test(1, 2))

# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:51 下午
# @Author  : 顾安
# @File    : 17. 局部变量.py
# @Software: PyCharm


def test_1():
    a = 300
    print(f'test_1在修改前的a的值为：{a}')  # f表达式：使用大括号进行占位，要打印的数据直接使用保存数值的变量名称
    a = 200
    print(f'test_1在修改后的a的值为：{a}')


def test_2():
    a = 400
    print('函数test_2中的局部变量为: %d' % a)


test_1()
test_2()
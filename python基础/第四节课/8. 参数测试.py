# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 8:57 下午
# @Author  : 顾安
# @File    : 8. 参数测试.py
# @Software: PyCharm


a = 1
b = 2


# 形参 在声明函数时括号中的参数如果没有定义默认值的情况被称之为形参
def test(a, b):
    print(a + b)


# 实参 因为传递的是定义好的a, b 变量 这两个变量有指向的值
test(a, b)


# 实参: 因为有默认值
def test(c=1, d=2):
    print(c + d)


test()


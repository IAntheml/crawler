# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:02 下午
# @Author  : 顾安
# @File    : 9. 函数的返回值.py
# @Software: PyCharm


# 获取两个值相加的结果
def add(num1, num2):
    return num1 + num2


# 通过一个变量可以获取return关键字所返回的值
result = add(1, 2)
print(result)


def test():
    print(1 + 1)


res = test()
print(res)


def a():
    return 1 + 1


def b():
    return a
c = b()
d = c()
print(d)


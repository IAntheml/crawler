# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 8:52 下午
# @Author  : 顾安
# @File    : 7. 函数参数.py
# @Software: PyCharm


def test(num1, num2):  # 形参：调用函数时用来存储数据的变量
    print("传递过来的第1个数是:%d" % num1)
    print("传递过来的第2个数是:%d" % num2)
    print("它们俩的和是:%d" % (num1 + num2))


test(100, 200)  # 实参：在调用函数时传入具体的值

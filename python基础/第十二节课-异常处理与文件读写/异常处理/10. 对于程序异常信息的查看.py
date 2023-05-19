# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:28
# @Author : 顾安
# @File : 10. 对于程序异常信息的查看.py
# @Software: PyCharm


def division_fun(x, y):
    return x / int(y)


def exp_fun(x, y):
    return division_fun(x, y) * 10


def main(x, y):
    exp_fun(x, y)


main(2, 0)

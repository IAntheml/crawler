# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:19
# @Author : 顾安
# @File : 8. finally的使用.py
# @Software: PyCharm


def use_finally(x, y):
    try:
        a = x / y
    finally:
        # finally 有无异常都会被执行
        print('无论我有没有异常，我都会被执行')


use_finally(2, 1)

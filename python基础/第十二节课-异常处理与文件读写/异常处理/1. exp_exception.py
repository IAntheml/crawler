# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午8:22
# @Author : 顾安
# @File : 1. exp_exception.py
# @Software: PyCharm


def exp_exception(x, y):
    try:
        a = x / y
        return a
    except:
        # 如果当前try语句块中的代码报错 则会运行当前的代码块
        print('当前程序出错了...')


print(exp_exception(9, 0))


'''
如果在try语句中出现报错则会去运行except中的代码
'''
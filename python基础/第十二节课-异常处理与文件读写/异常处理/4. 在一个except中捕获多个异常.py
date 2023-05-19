# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午8:59
# @Author : 顾安
# @File : 4. 在一个except中捕获多个异常.py
# @Software: PyCharm


def exp_exception(x, y):
    try:
        obj_name = name
        a = x / y
    # as 属于python中的关键字 用来进行别名设置
    except (ZeroDivisionError, SyntaxError, StopIteration, NameError) as e:
        print('当前程序出现错误...:', e)


exp_exception(9, 0)

# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午8:48
# @Author : 顾安
# @File : 3. 使用try语句捕获多个异常.py
# @Software: PyCharm


def exp_exception(x, y):
    try:
        a = x / y
        obj_name = name
    except NameError:
        print('命名错误...')
    except ZeroDivisionError:
        print('除数不能为0...')


exp_exception(9, 0)

# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:11
# @Author : 顾安
# @File : 6. 异常中的else.py
# @Software: PyCharm


def model_exception(x, y):
    try:
        a = x / y
        # return a
    except:
        print('Error happened')
    else:
        print('It went as expected')


model_exception(2, 1)

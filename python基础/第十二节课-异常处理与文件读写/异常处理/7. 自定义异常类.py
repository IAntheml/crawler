# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:14
# @Author : 顾安
# @File : 7. 自定义异常类.py
# @Software: PyCharm


class MyError(Exception):
    def __init__(self):
        pass

    # 如果想要在控制台输出异常信息
    def __str__(self):
        return '自定义异常...'


def my_error():
    try:
        raise MyError()
    except MyError as e:
        print(e)


my_error()



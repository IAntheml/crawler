# -*- coding:utf-8 -*-
# @FileName: 1. 创建日志器进行日志记录.py
# @Time    : 2022/11/7 8:17 下午
# @Author  : 顾安

import inspect


def debug():
    caller_name = inspect.stack()[1][3]
    print(f'[debug]: enter {caller_name}()')


def say_hello():
    debug()
    print('hello!')


def say_goodbye():
    debug()
    print('hello!')


say_hello()
say_goodbye()


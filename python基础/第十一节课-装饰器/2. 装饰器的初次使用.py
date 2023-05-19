# -*- coding:utf-8 -*-
# @FileName: 2. 装饰器的初次使用.py
# @Time    : 2022/11/7 8:32 下午
# @Author  : 顾安


def debug(func):
    def wrapper():
        print(f'[DEBUG]: enter {func.__name__}()')
        return func()  # 参数func是一个函数的引用
    return wrapper


def say_hello():
    print('hello')


# 现在我需要将say_hello函数的引用传给debug函数
say_hello = debug(say_hello)

say_hello()

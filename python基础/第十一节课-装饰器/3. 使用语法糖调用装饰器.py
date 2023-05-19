# -*- coding:utf-8 -*-
# @FileName: 3. 使用语法糖调用装饰器.py
# @Time    : 2022/11/7 8:55 下午
# @Author  : 顾安


def debug(func):
    def wrapper():
        print(f'[DEBUG]: enter {func.__name__}()')
        return func()  # 参数func是一个函数的引用
    return wrapper


@debug  # 装饰器依赖闭包
def say_hello():
    print('hello')


say_hello()


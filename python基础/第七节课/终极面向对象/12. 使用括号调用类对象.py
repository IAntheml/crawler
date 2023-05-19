# -*- coding:utf-8 -*-
# @FileName: 12. 使用括号调用类对象.py
# @Time    : 2022/10/26 21:15
# @Author  : 顾安


class Foo:

    def info(self):
        pass

    def __init__(self):
        pass

    def __call__(self, *args, **kwargs):
        print('如果对类实例化之后添加了括号则会执行当前方法')


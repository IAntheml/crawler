# -*- coding:utf-8 -*-
# @FileName: 13. 使用__dict__进行方法属性查询.py
# @Time    : 2022/10/26 21:21
# @Author  : 顾安


class Province:
    country = '中国'

    def __init__(self, name, count):
        self.name = name
        self.count = count

    def func(self, *args, **kwargs):
        print('这是一个方法')


# 获取类的属性
print(Province.__dict__)


# 获取实例对象的属性 通过实例对象使用__dict__只能获取到实例属性的名称与值
p = Province('长沙', 1)
print(p.__dict__)




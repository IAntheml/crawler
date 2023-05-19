# -*- coding:utf-8 -*-
# @FileName: 3. 自定义可迭代对象.py
# @Time    : 2022/10/31 21:13
# @Author  : 顾安


from collections.abc import Iterable


class MyList:
    def __init__(self):
        self.container = []

    def __iter__(self):
        pass

    def add(self, item):
        self.container.append(item)


my_list = MyList()

my_list.add(11)
my_list.add(22)
my_list.add(33)


print(f'当前my_list实例对象是否是一个可以迭代的对象: {isinstance(my_list, Iterable)}')
for item in my_list:
    print(item)


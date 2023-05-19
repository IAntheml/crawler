# -*- coding:utf-8 -*-
# @FileName: 4. 自定义迭代器对象.py
# @Time    : 2022/10/31 21:24
# @Author  : 顾安


from collections.abc import Iterable, Iterator


class MyList:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    # 想要把普通对象转为一个可以迭代的对象
    def __iter__(self):
        return MyIterator()


# 自定义迭代器的类
class MyIterator:
    def __init__(self):
        pass

    def __iter__(self):
        pass

    # 声明这个类是一个迭代器
    def __next__(self):
        pass


my_list = MyList()
list_iter = iter(my_list)

print('my_list是否是一个可以迭代的对象: ', isinstance(my_list, Iterable))
print('my_list是否是一个迭代器: ', isinstance(my_list, Iterator))


print('list_iter是否是一个迭代器: ', isinstance(list_iter, Iterator))
print('list_iter是否是一个可以迭代的对象: ', isinstance(list_iter, Iterable))

'''
当前案例只是将类转为一个迭代器而已
    但是这个迭代器并没有记录索引的功能
'''

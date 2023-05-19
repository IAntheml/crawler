# -*- coding:utf-8 -*-
# @FileName: 5. 创建一个可以使用的自定义迭代器.py
# @Time    : 2022/10/31 21:34
# @Author  : 顾安


from collections.abc import Iterable, Iterator


class MyList:
    def __init__(self):
        self.items = []

    def add(self, item):
        self.items.append(item)

    # 想要把普通对象转为一个可以迭代的对象
    def __iter__(self):
        return MyIterator(self)


# 自定义迭代器的类
class MyIterator:
    # 在计数之前 我需要知道这个被迭代的对象的长度
    def __init__(self, my_list):
        self.my_list = my_list
        # 创建一个计数器
        self.current = 0

    def __iter__(self):  # 返回一个迭代器
        return self

    # 声明这个类是一个迭代器
    def __next__(self):
        if self.current < len(self.my_list.items):
            item = self.my_list.items[self.current]
            self.current += 1
            return item
        else:
            # 一个新的关键字 当for循环接收到这个异常错误之后 会自动停止
            raise StopIteration


my_list = MyList()

my_list.add(1)
my_list.add(2)
my_list.add(3)
my_list.add(4)

for item in my_list:
    print(item)

# for 循环的本质是一个死循环 在不停的调用__next__方法 直到抛出StopIteration停止



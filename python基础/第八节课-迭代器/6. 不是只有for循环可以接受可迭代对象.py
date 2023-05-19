# -*- coding:utf-8 -*-
# @FileName: 6. 不是只有for循环可以接受可迭代对象.py
# @Time    : 2022/10/31 21:57
# @Author  : 顾安


class MyList(object):
    """自定义的一个可迭代对象"""
    def __init__(self):
        self.items = []

    def add(self, val):
        self.items.append(val)

    def __iter__(self):
        myiterator = MyIterator(self)
        return myiterator


class MyIterator(object):
    """自定义的供上面可迭代对象使用的一个迭代器"""
    def __init__(self, mylist):
        self.mylist = mylist
        # current用来记录当前访问到的位置
        self.current = 0

    def __next__(self):
        if self.current < len(self.mylist.items):
            item = self.mylist.items[self.current]
            self.current += 1
            return item
        else:
            raise StopIteration

    def __iter__(self):
        return self


if __name__ == '__main__':
    my_list = MyList()
    my_list.add(1)
    my_list.add(2)
    my_list.add(3)
    my_list.add(4)
    my_list.add(5)

    nums = list(my_list)  # 列表 字典 集合 元组等容器类型都能接收一个迭代器 转为指定的容器类型
    print(nums)

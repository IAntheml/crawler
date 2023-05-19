# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 9:49 下午
# @Author  : 顾安
# @File    : 28. dir() 方法.py
# @Software: PyCharm


class Test:
    nums = [1, 2, 3]

    def __init__(self, name, address):
        self.name = name
        self.address = address

    def info(self):
        print(f'name:{self.name}, address: {self.address}')

    @classmethod
    def print_nums(cls):
        print(f'nums: {cls.nums}')


# 创建实例对象
test = Test('小小', '北京')

# 现在想要知道当前这个实例对象中到底有什么
# dir()
print(dir(test))
'''
[
    '__class__', 
    '__delattr__', 
    '__dict__', 
    '__dir__', 
    '__doc__', 
    '__eq__', 
    '__format__', 
    '__ge__', 
    '__getattribute__', 
    '__gt__', 
    '__hash__', 
    '__init__', 
    '__init_subclass__', 
    '__le__', 
    '__lt__', 
    '__module__', 
    '__ne__', 
    '__new__', 
    '__reduce__', 
    '__reduce_ex__', 
    '__repr__', 
    '__setattr__', 
    '__sizeof__', 
    '__str__', 
    '__subclasshook__', 
    '__weakref__', 
    'address', 
    'info', 
    'name', 
    'nums', 
    'print_nums'
]
'''

print(dir(Test))
'''
[
    '__class__', 
    '__delattr__', 
    '__dict__', 
    '__dir__', 
    '__doc__', 
    '__eq__', 
    '__format__', 
    '__ge__', 
    '__getattribute__', 
    '__gt__', 
    '__hash__', 
    '__init__', 
    '__init_subclass__', 
    '__le__', 
    '__lt__', 
    '__module__', 
    '__ne__', 
    '__new__', 
    '__reduce__', 
    '__reduce_ex__', 
    '__repr__', 
    '__setattr__', 
    '__sizeof__', 
    '__str__', 
    '__subclasshook__', 
    '__weakref__', 
    'info', 
    'nums', 
    'print_nums'
]
'''

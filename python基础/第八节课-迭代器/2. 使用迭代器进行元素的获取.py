# -*- coding:utf-8 -*-
# @FileName: 2. 使用迭代器进行元素的获取.py
# @Time    : 2022/10/31 20:56
# @Author  : 顾安


my_list = [1, 2, 3, 4, 5]

# 1. 获取迭代器对象
obj = iter(my_list)

# 2. 使用next() 方法获取迭代器中的元素  next执行一次获取一个元素 依次获取
print(next(obj))
print(next(obj))
print(next(obj))
print(next(obj))
print(next(obj))

# 3. 如果获取的元素超出了当前列表的元素范围 则报错 因为没有元素可以返回了

# 使用异常处理防止程序报错
try:
    print(next(obj))
except StopIteration as e:
    print(f'当前错误信息：{e}')


# 什么是可迭代对象：列表 字典 集合 元组 字符串
# 什么是迭代器：一个类似于计数器的一个对象
# 如何获取迭代器：iter(可迭代对象)
# 如何使用迭代器：next(迭代器对象)
# 异常处理的简单实用



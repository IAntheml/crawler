# -*- coding:utf-8 -*-
# @FileName: 1. 生成器的概念.py
# @Time    : 2022/11/2 20:05
# @Author  : 顾安


# 如果一个函数中存在yield关键字 则当前这个函数是一个特殊的生成器函数
def my_range(n):
    i = 0
    while i < n:
        yield i
        i += 1


# 所谓的生成器 是一种特殊的函数 不能像普通函数一样进行()调用
my_range = my_range(3)
# print(my_range)

# 因为之前讲过一句话 生成器是一种特殊的迭代器  next()
for item in my_range:
    print(item)

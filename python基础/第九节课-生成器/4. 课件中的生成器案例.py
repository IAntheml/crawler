# -*- coding:utf-8 -*-
# @FileName: 4. 课件中的生成器案例.py
# @Time    : 2022/11/2 20:52
# @Author  : 顾安


gen = (i for i in range(100000) if i % 2)

print("__iter__" in dir(gen))
print("__next__" in dir(gen))

print(sum(gen))
# 因为当生成器返回一个值 相当于移除一个值 pop
print([i for i in gen])

# 生成器会在协程中使用
# 生成器也会在scrapy框架中使用


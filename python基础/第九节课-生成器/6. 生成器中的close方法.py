# -*- coding:utf-8 -*-
# @FileName: 6. 生成器中的close方法.py
# @Time    : 2022/11/2 21:11
# @Author  : 顾安


def my_range(n):
    i = 0
    while i < n:
        yield i
        i += 1


my_iter = my_range(3)
print(next(my_iter))

# 我只是想要获取到第一个元素 获取到第一个元素之后关闭当前的生成器对象
my_iter.close()
print(next(my_iter))


'''
1. 生成器本质上是一个迭代器 只不过是一个特殊的迭代器
2. 生成器内部声明了迭代器协议: __iter__ __next__不需要自己定义
3. 生成器可以使用函数的方式去定义 但是生成器函数中不能有return，并使用yield进行结果的返回
4. 在生成器函数中，可以定义多个yield
'''

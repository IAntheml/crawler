# -*- coding:utf-8 -*-
# @FileName: 6. 内部函数修改外部函数中的参数.py
# @Time    : 2022/11/4 20:55
# @Author  : 顾安


def counter(start=0):
    def add_one():
        # 声明外部函数中的参数可以在内部函数中进行修改
        nonlocal start
        start += 1
        return start
    return add_one


c1 = counter(5)
print(c1())


c2 = counter(5)
print(c2())

print(id(c1))
print(id(c2))


'''
c1 与 c2 类似于面向对象中的两个实例对象
'''
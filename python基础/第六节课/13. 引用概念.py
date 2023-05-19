# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:36 下午
# @Author  : 顾安
# @File    : 13. 引用概念.py
# @Software: PyCharm


# a = 1
# b = a
# print(b)
#
# a = 2
# print(a)
# print(b)
#
#
# list_a = [1, 2]
# list_b = list_a
# list_a.append(3)
# print(list_b)


a = 100

print(id(a))

list_a = [1, 2, 3]
print(id(list_a))

list_b = list_a
print(id(list_b))


a = 1000000
b = 1000000

print(a is b)





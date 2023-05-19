# -*- coding: utf-8 -*-
# @Time    : 2022/9/26 8:19 下午
# @Author  : 顾安
# @File    : 1. 字符串中的切片.py
# @Software: PyCharm

# name = 'abcdef'
# print(name[0:3])  # 取下标为0、1、2的字符，注意取不到下标为3的空间


# name = 'abcdef'
# print(name[:3])  # 取下标为0、1、2的字符，注意取不到下标为3的空间


# name = 'abcdef'
# print(name[3:5])  # 取下标为3、4 的字符


# name = 'abcdef'
# print(name[1:-1])  # 取下标为1开始到右侧最后一个字符之前的所有字符

# name = 'abcdef'
# print(name[1:5:2])
# [b[,c,d],e] bd


# name = 'abcdef'
# print(name[5:1:-1])
# [f,e,d,c]

# name = 'abcdef'
# print(name[5:1:-2])


# name = 'abcdef'
# print(name[::1])


# name = 'abcdef'
# print(name[::])

# name = 'abcdef'
# print(name[::-1])


# name = 'abcdef'
# print(name[::-2])
# [a,[b,c],[d,e,]f]
# [f,d,b]


s = 'Hello World!'
print(s[4])
print(s)
print(s[:])  # 取出所有元素（没有起始位和结束位之分），默认步长为1
print(s[1:])  # 从下标为1开始，取出 后面所有的元素（没有结束位）
print(s[:5])  # 从起始位置开始，取到 下标为5的前一个元素（不包括结束位本身）
print(s[:-1])  # 从起始位置开始，取到 倒数第一个元素（不包括结束位本身）
print(s[-4:-1])  # 从倒数第4个元素开始，取到 倒数第1个元素（不包括结束位本身）
print(s[1:5:2])  # 从下标为1开始，取到下标为5的前一个元素，步长为2（不包括结束位本身）
# python 字符串快速逆序
print(s[::-1])  # 从后向前，按步长为1进行取值


'''
在切片表达式中
    3
    开始位：包含开始位的值
    结束位：不包含结束位的值
    步长：如果为2的情况下 则取值的特点是间隔取值
'''
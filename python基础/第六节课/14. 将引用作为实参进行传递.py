# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 10:00 下午
# @Author  : 顾安
# @File    : 14. 将引用作为实参进行传递.py
# @Software: PyCharm


def test(p):
    # 此时变量p也指向nums指向的列表
    p.append(44)
    print("在函数test中，p=", p)


nums = [11, 22, 33]
print("调用test函数之前，nums=", nums)
test(nums)  # 此时将列表的引用当做了实参进行传递
print("调用test函数之后，nums=", nums)

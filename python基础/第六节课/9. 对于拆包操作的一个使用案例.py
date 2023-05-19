# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:12 下午
# @Author  : 顾安
# @File    : 9. 对于拆包操作的一个使用案例.py
# @Software: PyCharm


def get_my_info():
    name = '安娜'
    address = '长沙'
    age = 90
    high = 180
    gender = '未知'
    return name, address, age, high, gender


name, address, age, high, gender = get_my_info()
print(name, address, age, high, gender)

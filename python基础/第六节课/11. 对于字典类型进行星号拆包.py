# -*- coding: utf-8 -*-
# @Time    : 2022/10/10 9:25 下午
# @Author  : 顾安
# @File    : 11. 对于字典类型进行星号拆包.py
# @Software: PyCharm


def test(name, age, address):
    print(name)
    print(age)
    print(address)


info = {
    'name': '安娜',
    'age': 18,
    'address': '长沙'
}

test(**info)


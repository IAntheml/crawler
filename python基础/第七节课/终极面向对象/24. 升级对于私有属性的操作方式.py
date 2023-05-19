# -*- coding:utf-8 -*-
# @FileName: 24. 升级对于私有属性的操作方式.py
# @Time    : 2022/10/28 21:37
# @Author  : 顾安


class Money:
    def __init__(self):
        self.__money = 0

    def get_money(self):
        return self.__money

    # 原来的属性是0 value参数
    def set_money(self, value):
        if isinstance(value, int):
            self.__money = value
        else:
            print('传入的值不是一个数字...')

    money = property(get_money, set_money)


m = Money()
m.money = 200
print(m.money)



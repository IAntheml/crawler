# -*- coding:utf-8 -*-
# @FileName: 25. 将property类属性操作转为装饰器.py
# @Time    : 2022/10/28 21:43
# @Author  : 顾安


class Money:
    def __init__(self):
        self.__money = 0

    @property
    def money(self):
        return self.__money

    @money.setter
    def money(self, value):
        if isinstance(value, int):
            self.__money = value
        else:
            print('传入参数error...')


m = Money()
print(m.money)
m.money = 50
print(m.money)



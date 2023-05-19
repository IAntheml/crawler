# -*- coding:utf-8 -*-
# @FileName: 21. 在商城开发中设置打折价格.py
# @Time    : 2022/10/28 20:57
# @Author  : 顾安


class Goods(object):
    def __init__(self):
        self.original_price = 100
        self.discount = 0.8

    @property
    def price(self):
        new_price = self.original_price * self.discount
        return new_price

    @price.setter
    def price(self, value):
        self.original_price = value

    @price.deleter
    def price(self):
        del self.original_price


obj = Goods()
print(obj.price)

# 进价 100  涨价
obj.price = 200
print(obj.price)


# 删除进价
del obj.price



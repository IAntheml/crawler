# -*- coding:utf-8 -*-
# @FileName: 22. 通过类属性进行property设置.py
# @Time    : 2022/10/28 21:05
# @Author  : 顾安


class Goods:
    def get_price(self):
        return 100

    price = property(get_price)


obj = Goods()
print(obj.price)

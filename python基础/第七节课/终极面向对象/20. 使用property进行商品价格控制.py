# -*- coding:utf-8 -*-
# @FileName: 20. 使用property进行商品价格控制.py
# @Time    : 2022/10/28 20:43
# @Author  : 顾安


class Goods:
    def __init__(self):
        self.price = 100

    # 获取价格
    # @property
    # def _price(self):
    #     return self.price

    # 设置价格
    # @_price.setter
    # def set_price(self, value):
    #     self.price = value
    #     return self.price
    #
    #
    # #删除价格
    # @_price.deleter
    # def del_price(self):
    #     del self.price


# goods = Goods()
# print(goods._price)
#
# # 修改
# result = goods.set_price = 200
# print(result)
#
# # 删除
# del goods.del_price
# goods = Goods()
# print(goods.price)





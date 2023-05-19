# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:36 下午
# @Author  : 顾安
# @File    : 13. __init__方法中的案例一.py
# @Software: PyCharm


class Hero(object):
    """定义了一个英雄类，可以移动和攻击"""
    def __init__(self, new_name, new_hp, new_atk, new_armor):
        self.name = new_name  # 姓名
        self.hp = new_hp  # 生命值
        self.atk = new_atk  # 攻击力
        self.armor = new_armor  # 护甲值

    def move(self):
        print("正在前往事发地点...")

    def attack(self):
        print("发出了一招强力的普通攻击...")


# 实例化了一个英雄对象，并自动调用__init__()方法
taidamier = Hero("程咬金", 1900, 900, 800)

# 通过.成员选择运算符，获取对象的实例方法
# taidamier.info()  # 只需要调用实例方法info()，即可获取英雄的属性
taidamier.move()
taidamier.attack()

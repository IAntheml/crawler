# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:39 下午
# @Author  : 顾安
# @File    : 14. __init__方法中的案例二.py
# @Software: PyCharm


class Hero(object):
    """定义了一个英雄类，可以移动和攻击"""

    def __init__(self, new_name, new_skill, new_hp, new_atk, new_armor):
        self.name = new_name
        self.skill = new_skill
        self.hp = new_hp
        self.atk = new_atk
        self.armor = new_armor

    def move(self):
        """实例方法"""
        print("%s 正在前往事发地点..." % self.name)

    def attack(self):
        """实例方法"""
        print("发出了一招强力的%s..." % self.skill)

    def info(self):
        print("英雄 %s 的生命值 :%d" % (self.name, self.hp))
        print("英雄 %s 的攻击力 :%d" % (self.name, self.atk))
        print("英雄 %s 的护甲值 :%d" % (self.name, self.armor))


# 实例化英雄对象时，参数会传递到对象的__init__()方法里
taidamier = Hero("泰达米尔", "旋风斩", 2600, 450, 200)
gailun = Hero("盖伦", "大宝剑", 4200, 260, 400)

# 调用对象方法
taidamier.attack()
taidamier.move()
gailun.move()

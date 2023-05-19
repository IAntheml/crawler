# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 9:05 下午
# @Author  : 顾安
# @File    : 15. 方法重写.py
# @Software: PyCharm


class Father:
    def play_game(self):
        print('父亲正在玩游戏...')

    def eat(self):
        print('父亲正在吃饭...')

    def drink(self):
        print('父亲正在喝水...')


class Son(Father):
    # 需要对父类中的玩游戏方法进行重写
    def play_game(self):
        print('儿子正在玩游戏...')


father = Father()
father.play_game()

son = Son()
son.play_game()

# son.eat()


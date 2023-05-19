# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 9:18 下午
# @Author  : 顾安
# @File    : 16. super 方法的使用一.py
# @Software: PyCharm


class Father:
    def play_game(self):
        print('父亲正在玩游戏')


class Son(Father):
    def play_game(self):
        # 在重写的这个方法中调用父类的打印语句
        # print('父亲正在玩游戏')
        super().play_game()
        print('儿子正在玩游戏')


son = Son()
son.play_game()



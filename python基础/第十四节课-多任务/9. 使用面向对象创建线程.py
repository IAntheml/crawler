# -*- coding: utf-8 -*-
# @Time: 10:07 下午
# @Author: 顾安
# @File: 9. 使用面向对象创建线程
# Software: PyCharm

from time import sleep
import threading


class Sing(threading.Thread):
    # 当前类中有没有写构造函数？
    # 如果你当前构造的类需要有实例属性
    # 那么在重写__init__方法时，需要在子类中的__init__中运行线程类的__init__
    def __init__(self):
        # 在线程类中必须先要运行线程父类的构造方法
        super().__init__()

    def sing(self):
        for i in range(5):
            print('正在唱歌: ', i)
            sleep(1)

    # 大家需要重写一个方法 run方法
    def run(self):
        self.sing()


class Dance(threading.Thread):
    def dance(self):
        for i in range(5):
            print('正在跳舞: ', i)
            sleep(1)

    def run(self):
        self.dance()


if __name__ == "__main__":
    s = Sing()
    d = Dance()

    s.start()
    d.start()

# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 8:13 下午
# @Author  : 顾安
# @File    : 10. 使用实例方法创建实例属性.py
# @Software: PyCharm


class Cat:
    # 实例方法
    def info(self, name, age):
        # 实例属性
        self.name = name
        self.age = age

    # 当前这个猫的行为
    def eat(self):
        print(f'{self.name}正在吃鱼...')
        
    def drink(self):
        print(f'{self.name}正在喝水...')

    def print_info(self):
        print(f'我叫{self.name}, 今年{self.age}岁')


# 1. 实例化对象
tom = Cat()

# 2. 实例属性的创建
tom.info('汤姆猫', 2)

# 3. 执行行为
tom.eat()
tom.drink()
tom.print_info()

# 现在需要通过这个类创建两只猫
jiafei = Cat()
jiafei.info('加菲猫', 3)
jiafei.eat()
jiafei.drink()
jiafei.print_info()


# 一个类可以创建多个实例对象 每个实例对象都单独存储在内存中
# 两个实例对象在内存中是独立的

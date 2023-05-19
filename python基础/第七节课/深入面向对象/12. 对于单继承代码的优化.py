# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 8:33 下午
# @Author  : 顾安
# @File    : 12. 对于单继承代码的优化.py
# @Software: PyCharm


class Animal:
    # 定义三个实例方法
    def eat(self):
        print('吃饭...')

    def drink(self):
        print('喝水...')

    def sleep(self):
        print('正在睡觉...')


# 需要打印详细信息
class Dog(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(f'我叫: {self.name}, 年龄: {self.age}岁')


# 不需要打印详细信息
class Cat(Animal):
    pass


dog = Dog('旺财', 3)
dog.eat()
dog.drink()
dog.sleep()
dog.info()


cat = Cat()
cat.eat()
cat.drink()
cat.sleep()



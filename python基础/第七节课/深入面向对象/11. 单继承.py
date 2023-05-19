# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 8:23 下午
# @Author  : 顾安
# @File    : 11. 单继承.py
# @Software: PyCharm


class Animal:
    # 详细信息
    def __init__(self, name, age):
        self.name = name
        self.age = age

    # 定义三个实例方法
    def eat(self):
        print('吃饭...')

    def drink(self):
        print('喝水...')

    def sleep(self):
        print('正在睡觉...')

    def info(self):
        print(f'我叫: {self.name}, 年龄: {self.age}岁')


class Dog(Animal):
    pass


dog = Dog('旺财', 3)
dog.eat()
dog.drink()
dog.sleep()
dog.info()


'''
如果我现在想要给当前的狗类添加一个方法
    打印当前这个狗类创建的实例对象的一些信息
    
    
这种写法有没有什么问题？
    因为子类继承了父类 父类中有一个构造方法 子类在实例化对象时需要满足父类中的构造方法
    在子类创建实例对象时需要传递参数
    
    如果有其他子类 在其他子类中并不需要打印详细信息，如果按照当前的这种写法 则不需要打印详细信息的类也会具有当前的info方法
    浪费....
    
    
    一般在开发时， 在父类中只是定义一些通用的方法 即: 在子类中都会使用到的方法
    如果在子类中有独有的方法: 定义在子类
'''


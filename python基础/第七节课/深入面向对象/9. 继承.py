# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 8:04 下午
# @Author  : 顾安
# @File    : 9. 继承.py
# @Software: PyCharm


# 动物类
class Animal:
    def a_print(self):
        print('正在叫...')


# 具有一定特征的动物 例如: 狗 猫...
class Dog(Animal):
    pass


class Cat(Animal):
    pass


dog = Dog()
dog.a_print()


'''
如果一个类(其他类的名字)
    这两个类具有了一定的关系
    
    继承关系
    
    
'''



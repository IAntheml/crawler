# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:11 下午
# @Author  : 顾安
# @File    : 3. 如何使用实例对象对私有方法进行操作.py
# @Software: PyCharm


class StudentInfo:
    # 创建一个构造方法
    def __init__(self, name, age):
        self.name = name
        # 私有属性
        self.__age = age
    
    def set_age(self, new_age):
        # 私有方法可以在类的内部进行操作
        if 1 <= new_age <= 100:
            self.__age = new_age
            print('年龄设置成功...')
    
    def info(self):
        print(f'我叫{self.name}, 今年{self.__age}岁')


stu = StudentInfo('双双', 9)
stu.info()

stu.set_age(50)
stu.info()

'''
如果想要修改私有属性
    则需要在类中创建一个对私有属性进行操作的方法
    
    我们可以在这个类中提供一个修改私有属性的接口(api)
    
    之后对私有属性进行操作时, 一般单独的去创建一个普通的实例方法进行控制
'''



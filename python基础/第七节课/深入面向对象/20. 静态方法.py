# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 8:02 下午
# @Author  : 顾安
# @File    : 20. 静态方法.py
# @Software: PyCharm


class Test:
    def __init__(self, name):
        self.name = name

    def info(self):
        print(self.name)

    def __todo(self):
        print('这是要做的事情')

    def set_def(self):
        self.__todo()

    @staticmethod
    def info_2():
        print('今天天气不错...')


# 测试这个所谓的静态方法的调用
test = Test('安娜')
test.info_2()
test.set_def()


# 使用类对象进行静态方法的调用
Test.info_2()


'''
发现这个静态方法可以使用实例对象或者类对象进行调用

所谓的静态方法是没有self参数的
    静态方法无法访问实例属性
    
静态方法有什么用？
    静态方法的位置在哪里？
        类的内部！
        这个静态方法的作用域在这个类中
        
        确定作用域的
            本质上静态方法和我们之前所学的函数基本是一致的
            
            只是当前这个函数的作用域在这个类中
                必须通过这个类才能调用这个静态方法
'''

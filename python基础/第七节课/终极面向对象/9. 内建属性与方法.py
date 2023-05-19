# -*- coding:utf-8 -*-
# @FileName: 9. 内建属性与方法.py
# @Time    : 2022/10/26 20:13
# @Author  : 顾安


class Test:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def info(self):
        print(self.name, self.age)


test = Test('1', 2)

# 查看类对象属性与方法
print(dir(Test))
print(dir(test))

'''
关于python类中的__new__方法：
    帮助类在内存中去开辟一个空间
    
python解释器会在内存中创建一个空间来存储类对象
如果需要对当前这个类进行实例化的话 则也需要创建一个空间来存储实例对象

    如果你创建了三个实例对象
        则在内存中创建三个空间类存储这些对象
        
    在实例化类时，想要在内存中只开辟一个空间来存储实例对象
        __new__
        
    用来控制创建内存的数量的
        开发模式
            单例模式
                你对这个类进行了多次的实例化
                    但是只会占用一个内存空间
                    
                    第一次创建实例对象时，占用一个内存空间
                    第二次创建实例对象时， 将上一次的对象的引用拿过来进行重新赋值
                    
                    test()
                    test2()
'''


class Person:
    def info(self):
        return None


p = Person()
print(p.__class__)

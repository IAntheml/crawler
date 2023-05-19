# -*- coding:utf-8 -*-
# @FileName: 2. 引入 - 通过面向对象的方式去优化代码.py
# @Time    : 2022/11/4 20:10
# @Author  : 顾安


# 面向对象的方式完成功能
class Person:
    def __init__(self, name):
        self.name = name

    def say(self, content):
        print(f'{self.name}: {content}')


# 实例化
p1 = Person('安娜')
p2 = Person('双双')

p1.say('今天吃了么？')
p2.say('吃过了...')

p1.say('吃了啥？')
p2.say('一头母牛')

p1.say('为啥没叫我？')
p2.say('我一个人正好')

p1.say('你小气~')
p2.say('不客气~')



'''
所有的类  object
    有些放方法我们用不到
    
创建实例对象会占用空间
    100万个实例对象
'''
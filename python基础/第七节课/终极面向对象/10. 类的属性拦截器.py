# -*- coding:utf-8 -*-
# @FileName: 10. 类的属性拦截器.py
# @Time    : 2022/10/26 20:38
# @Author  : 顾安


class Tuling:
    def __init__(self, sub):
        self.sub1 = sub
        self.sub2 = 'java'

    # 声明一个属性拦截器
    def __getattribute__(self, item):
        if item == 'sub1':
            print('现在访问的是sub1属性...')
            return 'c++'
        else:
            return object.__getattribute__(self, item)


# 如果用户传入的一个属性我想在运行时更改这个属性的值
t = Tuling('python')
print(t.sub1)


# 我现在想要或sub2的值  到底如何获取的？
# print(t.sub2)  # 实例对象获取实例属性需要通过__getattribute__进行获取


'''
sub1
    python
sub2
    java
    
在不对实例属性进行修改的情况下 让当前sub1返回c++
'''


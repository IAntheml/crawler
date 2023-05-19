# -*- coding:utf-8 -*-
# @FileName: 14. 使用内置方法对容器类型进行操作.py
# @Time    : 2022/10/26 21:29
# @Author  : 顾安


class Foo:
    def __getitem__(self, item):
        print('__getitem__被调用', item)

    def __setitem__(self, key, value):
        print('__setitem__被调用', key, value)

    def __delitem__(self, key):
        print('__delitem__被调用', key)


foo = Foo()

# 在当前这个实例对象中创建一个字典key
res = foo['name']
foo['name'] = '安娜'
del foo['name']



'''
动态与静态的定义

    动态:
        动态语言无需编译，在程序执行过程由解释器进行代码转义[py - 字节码]
        
    静态：
        需要使用编译器进行编译, c++ gcc 在执行前需要使用编译器进行编译转为字节码再由cpu进行执行
    
    
    因为动态语言在执行时需要通过解释器进行一行一行的翻译 在翻译的过程中我可以进行代码修改
    
'''
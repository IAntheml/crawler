# -*- coding:utf-8 -*-
# @FileName: 2. 生成器的执行流程.py
# @Time    : 2022/11/2 20:17
# @Author  : 顾安


def my_range(n):
    print('开始迭代...')
    i = 0
    while i < n:
        print('迭代中...')
        # 生成器执行时遇到yield关键字会暂停
        yield i
        i += 1
        print('迭代结束...')
        yield None


# 1. 创建一个变量用于接收生成器所返回的迭代器对象
my_iter = my_range(3)
print(next(my_iter))
print(next(my_iter))

'''
return
    代表的是整个函数结束
        在结束前可以返回值
        
        return在函数中只有一个
    
yield
    返回一个生成器对象
        可以使用next取到这个生成器对象的值
        但是yield不代表当前函数结束
        
        yield可以在函数中写多个
'''
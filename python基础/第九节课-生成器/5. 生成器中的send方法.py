# -*- coding:utf-8 -*-
# @FileName: 5. 生成器中的send方法.py
# @Time    : 2022/11/2 20:59
# @Author  : 顾安


def my_range(n):
    i = 0
    while i < n:
        str_value = yield i
        if str_value == '你好':
            print('当前判断方法被执行...')
        i += 1
        print(str_value)


my_iter = my_range(5)
# send 方法与next()方法 使用方式类似
# send 可以向生成器传递一个参数 并在生成器中进行接收
# send 一般情况下不在第一次获取值时使用

# 第一次取值
print(next(my_iter))

# 第二次取值时并向当前的生成器传递一个参数
print(my_iter.send('你好'))
print(my_iter.send('hello'))


# 可以在程序运行的过程中对当前的函数的运行过程进行操作
# 想要发送一个信息让当前这个生成器做其他事情 send
# 协程不需要锁 单线程






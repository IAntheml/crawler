# -*- coding:utf-8 -*-
# @FileName: 3. 使用闭包的方式进行代码优化.py
# @Time    : 2022/11/4 20:17
# @Author  : 顾安


def person(name):
    # 因为say函数在person函数的内部 那么就可以访问外层函数中的参数
    def say(content):
        print(f'{name}: {content}')
    return say


p1 = person('安娜')
p2 = person('双双')

p1('今天吃了么？')
p2('吃过了...')

p1('吃了啥？')
p2('一头母牛')

p1('为啥没叫我？')
p2('我一个人正好')

p1('你小气~')
p2('不客气~')


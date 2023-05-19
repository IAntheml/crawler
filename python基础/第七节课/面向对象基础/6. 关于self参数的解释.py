# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 9:34 下午
# @Author  : 顾安
# @File    : 6. 关于self参数的解释.py
# @Software: PyCharm


class StudentInfo:
    # 创建这个类的属性
    def __init__(self, name, address):
        # 实例属性
        self.name = name
        self.address = address

    # 实例方法
    def info(self):
        print(f'我叫{self.name}, 来自于{self.address}')


# 创建一个类的实例对象
stu_info = StudentInfo('安娜', '常德')

stu_info.info()


# 通过当前这个调用方式我们知道了self其实就是实例对象本身
StudentInfo.info(stu_info)


print(StudentInfo)
print(stu_info)



'''
类对象会在内存中存储 类属性 方法[实例方法 静态方法 类方法]

实例对象: 只会存储实例属性
'''

# 类对象
stu_info_1 = StudentInfo







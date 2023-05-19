# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 9:00 下午
# @Author  : 顾安
# @File    : 26. 类方法案例.py
# @Software: PyCharm


class Tool:
    tools_num = 0

    def __init__(self, name):
        self.name = name
        # 在构造方法中对类属性进行加法操作
        Tool.tools_num += 1

    def print_info(self):
        print(f'工具总数为: {self.tools_num}')

    @classmethod
    def print_info_(cls):
        print(f'工具总数为: {cls.tools_num}')


tieqiao = Tool('铁锹')
chutou = Tool('chutou')
xiyiji = Tool('洗衣机')


# 通过实例对象访问类属性
# xiyiji.print_info()
#
# # 通过类对象的方式进行类属性的访问
# Tool.print_info_()

tieqiao.print_info()


"""
静态方法
    如果一个方法中无需访问任何属性则可以使用静态方法

类属性
    如果想要让这个属性给多个方法使用，则可以使用类属性

类方法
    如果一个方法无需访问实例属性但需要访问类属性则可以使用类方法    
"""


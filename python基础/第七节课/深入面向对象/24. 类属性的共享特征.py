# -*- coding: utf-8 -*-
# @Time    : 2022/10/21 8:42 下午
# @Author  : 顾安
# @File    : 24. 类属性的共享特征.py
# @Software: PyCharm


class Tool(object):
    tools_num = 0  # 定义一个类属性，用来存储共享的数据

    def __init__(self, name):
        self.name = name
        Tool.tools_num += 1

    def print_info(self):
        print("工具的总数为：", self.tools_num)

    @staticmethod
    def print_info2(self):  # 如果在静态方法中写入了self参数 当前这个self参数没有任何意义 就是一个普通的形参
        print("工具的总数为：", Tool.tools_num)


tieqiao = Tool("铁锹")
chutou = Tool("锄头")
dianciluo = Tool("电磁炉")

print("工具的总数为：", Tool.tools_num)  # 可以直接通过 类名.类属性操作
tieqiao.print_info()  # 可以通过Tool创建的任意实例对象调用方法，在方法中获取

Tool.print_info2()

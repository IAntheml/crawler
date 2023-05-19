# -*- coding:utf-8 -*-
# @FileName: 1. 迭代案例.py
# @Time    : 2022/10/31 20:18
# @Author  : 顾安


class StuSystem(object):
    """
    学生管理系统
    """
    def __init__(self):
        self.stus = []

    def add(self):
        """
        添加一个新的学生
        :return:
        """
        name = input("请输入新学生的姓名:")
        tel = input("请输入新学生的手机号:")
        address = input("请输入新学生的住址:")

        new_stu = dict()
        new_stu["name"] = name
        new_stu["tel"] = tel
        new_stu["address"] = address

        self.stus.append(new_stu)


# 创建管理系统对象
stu_sys = StuSystem()

# 添加3个学生信息到系统中
stu_sys.add()
stu_sys.add()
stu_sys.add()

# 问题1：怎样才能实现用for循环遍历系统中所有的学生信息呢？下面的方式能实现吗？
# for item in stu_sys.stus:  # 通过实例对象访问实例属性 列表
#     print(item)

# 当前的想法是对这个类的实例对象进行迭代循环 而不是实例属性
for item in stu_sys:
    print(item)


# for temp in stu_sys:
#     print(temp)

# 问题2：如果需要一个列表，这个列表 样子例如 [{'name': '张三', 'id': 10086}, {'name': '李四': 'id': 10087}]
# stu_list = [ ...列表推导式...]
# 这个列表推导式该怎样写才能实现呢？

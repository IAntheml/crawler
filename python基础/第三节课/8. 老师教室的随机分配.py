# -*- coding: utf-8 -*-
# @Time    : 2022/9/28 9:16 下午
# @Author  : 顾安
# @File    : 8. 老师教室的随机分配.py
# @Software: PyCharm


import random

# 定义一个列表用来保存3个办公室
offices = [[], [], []]

# 定义一个列表用来存储8位老师的名字
names = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

# 遍历所有的老师，随机安排到0、1、2号办公室
for name in names:
    # random中的randint用来生成指定范围的随机整数
    random_num = random.randint(0, 2)
    offices[random_num].append(name)

i = 1
for office_names in offices:
    print('办公室%d的人数为:%d' % (i, len(office_names)))
    i += 1
    for name in office_names:
        print("%s" % name, end=' ')  # 一个教室有三个老师  我现在想把三个老师输出到一行
    print("\n")
    print("-" * 20)

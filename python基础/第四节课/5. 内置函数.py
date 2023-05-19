# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 8:36 下午
# @Author  : 顾安
# @File    : 5. 内置函数.py
# @Software: PyCharm


import os

# 打印出当前这个文件所在的路径
print(os.path)

# 获取序列类型中的最大值
int_list = [1, 2, 3]
print(max(int_list))


from datetime import datetime
print(datetime.now())

# 抓取相关信息的时候 需要验证当前服务器的时间

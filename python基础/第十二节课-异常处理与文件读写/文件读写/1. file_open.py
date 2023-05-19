# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:40
# @Author : 顾安
# @File : 1. file_open.py
# @Software: PyCharm


# 1. 定义当前这个文件的路径
path = 'test.txt'

f_name = open(path)
# 打印当前这个文件的文件名
print(f_name.name)

# open函数有一个返回值：是一个文件对象 file_obj



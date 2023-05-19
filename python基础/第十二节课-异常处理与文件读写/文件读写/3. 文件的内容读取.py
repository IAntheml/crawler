# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:57
# @Author : 顾安
# @File : 3. 文件的内容读取.py
# @Software: PyCharm

path = 'test.txt'

# 读取一个文件
f_name = open(path, 'r')
print(f_name.read())

# read() 方法是可以将文件中的内容尽可能的读取完
# read() 可以添加一个读取的长度


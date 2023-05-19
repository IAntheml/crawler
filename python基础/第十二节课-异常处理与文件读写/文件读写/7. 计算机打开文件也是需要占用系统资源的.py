# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午10:23
# @Author : 顾安
# @File : 7. 计算机打开文件也是需要占用系统资源的.py
# @Software: PyCharm


# python使用完文件之后一定要记得进行内存释放
path = 'test.txt'
file_obj = open(path, 'r')
print(file_obj.read())

# 用完文件要记得释放  显式关闭
file_obj.close()

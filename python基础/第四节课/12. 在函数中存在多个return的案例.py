# -*- coding: utf-8 -*-
# @Time    : 2022/9/30 9:16 下午
# @Author  : 顾安
# @File    : 12. 在函数中存在多个return的案例.py
# @Software: PyCharm


def create_nums(num):
    print("---1---")
    if num == 100:
        print("---2---")
        return num + 1  # 函数中下面的代码不会被执行，因为return除了能够将数据返回之外，还有一个隐藏的功能：结束函数
    else:
        print("---3---")
        return num + 2
    print("---4---")

result1 = create_nums(100)
print(result1)  # 打印101
result2 = create_nums(200)
print(result2)  # 打印202
# -*- coding: utf-8 -*-
# @Time    : 2022/9/29 9:34 下午
# @Author  : 顾安
# @File    : 13. 拆包.py
# @Software: PyCharm


num1, num2, num3, num4 = (11, 22, 33, 44)  # 一行代码搞定
print(num1, num2, num3, num4)

int_list = [1, 2]
a, b = int_list
print(a, b)

int_set = {3, 4}
a, b = int_set
print(a, b)

dict_info = {'name': '夏洛', 'gender': '女'}
a, b = dict_info
print(a, b)

for k, v in dict_info.items():
    print(k, v)


# 拆包的注意点
# 1. 直接对字典拆包会获取字典中的key
# 2. 在拆包时需要变量数量与值的数量对等
a, b = 1, 2
print(a, b)

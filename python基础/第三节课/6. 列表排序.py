# -*- coding: utf-8 -*-
# @Time    : 2022/9/28 8:57 下午
# @Author  : 顾安
# @File    : 6. 列表排序.py
# @Software: PyCharm


a = [1, 4, 2, 3]
a.sort()
print(a)

# 先排序再反转
a.sort(reverse=True)
print(a)

# 根据原有列表元素的排列方式直接反转
b = [1, 3, 2, 4]
b.reverse()

print('----')
print(b)

# -*- coding: utf-8 -*-
# @Time    : 2022/9/29 8:38 下午
# @Author  : 顾安
# @File    : 9. 序列类型的相互转换.py
# @Software: PyCharm


nums1 = [11, 22, 33]  # 定义列表
nums2 = (44, 55, 66)  # 定义元组
nums3 = {77, 88, 99}  # 定义集合

# 列表转换为元组、集合
print("-----------")
nums1_tuple = tuple(nums1)
print(type(nums1_tuple))
nums1_set = set(nums1)
print(type(nums1_set))

# 元组转换为列表、集合
print("-----------")
nums2_list = list(nums2)
print(type(nums2_list))
nums2_set = set(nums2)
print(type(nums2_set))

# 集合转换为列表、元组
print("-----------")
nums3_list = list(nums3)
print(type(nums3_list))
nums3_tuple = tuple(nums3)
print(type(nums3_tuple))

# -*- coding:utf-8 -*-
# @FileName: 3. if 判断语句.py
# @Time    : 2022/9/21 9:10 下午
# @Author  : 顾安

# age = 17
# print('if判断语句开始执行')
# if age >= 18:
#     print('当前已经成年了，可以去上网了....')
# print('当前判断语句结束')


age = 17
print('----if判断开始----')
if age >= 18:
    # 如果当前条件不成立则以下三句print都不会打印
    print('我已经成年了')
    print('我该懂事了')
    print('尽快学完python开发出去赚钱了')
print('----if判断结束----')  # 此处代码没有缩进 表示当前打印语句不在if语句控制范围之内，无论if条件是否成立都会执行

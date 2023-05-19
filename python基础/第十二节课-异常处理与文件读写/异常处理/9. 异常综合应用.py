# -*- coding: utf-8 -*-
# @Time : 2022/11/11 下午9:21
# @Author : 顾安
# @File : 9. 异常综合应用.py
# @Software: PyCharm


def error_test(x, y):
    try:
        a = x / y
    # 想要输出一个具体的异常信息
    except Exception as e:
        # 如果知道当前的异常信息 则尽量写上这个异常的类名
        print('程序异常:',  e)
    else:
        print('如果程序没有报错则我被执行...')
    finally:
        print('无论程序有没有错误我都会被执行...')


error_test(2, 1)
print('-' * 20)
error_test(2, 0)


'''
try:
    xxx
except:
    xxx
finally:
    xxx
    
lua
    一个程序出错 中断
    对接python
'''
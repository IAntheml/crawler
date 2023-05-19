# -*- coding: utf-8 -*-
# @Time    : 2022/10/19 8:43 下午
# @Author  : 顾安
# @File    : 14. 对于多继承的案例演示.py
# @Software: PyCharm


# 以下代码是当前手机的功能 作为父类
class Camera:
    def take_photo(self):
        print('正在拍照...')


class Mp3:
    def play_music(self):
        print('正在放音乐...')


# 手机类
class TelPhone(Camera, Mp3):
    def call(self):
        print('正在打电话...')

    def send_message(self):
        print('正在发送短信...')


# 想要创建一个手机 让这个手机有拍照的功能
phone = TelPhone()

phone.call()
phone.send_message()
phone.take_photo()
phone.play_music()


'''
可以把手机的功能拆分成一个个的类
    通过多继承的方式调用多个父类中的方法
    
    功能与功能之间相互独立的。如果我现在需要修改一个功能 会不会对另外的一个手机功能产生影响？
    
    解耦
        高内聚低耦合
            在功能模块之间，变量与变量之间有高度的耦合关系
                多个方法可以控制一个变量
                
            各个方法之间低耦合 即：方法与方法之间没有关系 就算修改了一个方法中的代码也不会对另外方法中的代码产生影响
'''

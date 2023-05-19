# -*- coding: utf-8 -*-
# @Time    : 2022/10/14 10:11 下午
# @Author  : 顾安
# @File    : 8. 动态创建实例属性.py
# @Software: PyCharm


class Hero(object):
    def set_info(self):
        # 下面定义的了3个实例属性，且给它们设置了初始值
        self.name = "安娜"
        self.age = 18
        self.address = "长沙"

    def print_info(self):
        print(self.qq, self.email)


# 创建实例对象
hero = Hero()
# 调用方法，从而让第4、5、6行被执行，从而完成实例对象的属性添加
hero.set_info()
# 通过对象方式直接获取属性
print(hero.name, hero.age, hero.address)
# 给对象添加额外的属性
hero.qq = 123456
hero.email = "wt_poppies@sina.com"
# 调用方法，在方法中获取qq、email
hero.print_info()

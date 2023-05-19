# -*- coding:utf-8 -*-
# @FileName: 19. 使用property获取页面数据个数.py
# @Time    : 2022/10/28 20:32
# @Author  : 顾安


class Page:
    def __init__(self, current_page):
        self.current_page = current_page
        # 每页显示的数据条数
        self.per_items = 10

    @property
    def start(self):
        val = (self.current_page - 1) * self.per_items
        return val

    @property
    def end(self):
        val = self.current_page * self.per_items
        return val


p = Page(2)
print(p.start)
print(p.end)

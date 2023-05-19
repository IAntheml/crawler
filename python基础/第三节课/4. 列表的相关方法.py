# -*- coding: utf-8 -*-
# @Time    : 2022/9/28 8:13 下午
# @Author  : 顾安
# @File    : 4. 列表的相关方法.py
# @Software: PyCharm


stu_names = ['张三', '李四', '王五']
for item in stu_names:
    print(item)

new_names = input('请输入你要添加的学生: ')
# append是列表中的一个方法
# append 一次只能添加一个元素
stu_names.append(new_names)
print(stu_names)



'''
对于列表的相关方法：
    增加：
        append
        extend
        insert
        
        append: 当前方法只能传入一个对象 具体的值 也可以是一个列表
            会产生列表嵌套的问题
            
        extend: 可以一次性传入多个值 但是需要一个序列类型，把序列类型中的元素进行迭代并将元素存入你调用这个方法的对象中
        
        insert: 指定元素下标位置进行数据的添加
        
    修改：
        通过 列表对象[索引值] = Value 进行值的修改
        
    
    查询：
        in、not in、count
        
        in: 在python中是成员运算符关键字
            判断你指定的值是否在序列类型中
            
        not in: 对于in是取反的操作
        
        in方法一般配合if for 进行使用
            if 用来判断成员是否存在
            for 用来迭代序列类型中的所有成员
            
        conut：
            判断指定的值在列表中出现了几次
        
    删除：
        del
        pop
        remove
        
        del: 可以删除整个列表也可以删除指定的元素
        
        pop: 删除列表中的最后一个值, 并且pop方法有返回值
        
        remove: 可以指定当前元素的名称进行删除
    
        clear: 清空列表中的元素，列表本身还是存在的
        
        
'''
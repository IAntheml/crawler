# -*- coding: utf-8 -*-
# @Time    : 2022/10/8 8:04 下午
# @Author  : 顾安
# @File    : student.py
# @Software: PyCharm

"""
学生管理系统
    通过函数的方式去实现的

系统的功能菜单
添加学生
删除功能
修改功能
查询功能[查询单个学生信息， 查询所有学生信息]
系统退出功能 [关闭程序]
"""

# 创建一个全局变量进行数据的存储
info_list = list()


# 创建系统的功能菜单函数
def print_menu():
    print("---------------------------")
    print("      学生管理系统 V1.0")
    print(" 1:添加学生")
    print(" 2:删除学生")
    print(" 3:修改学生")
    print(" 4:查询学生")
    print(" 5:显示所有学生")
    print(" 6:退出系统")
    print("---------------------------")


# 添加学生
def add_new_info():
    """
    添加学生信息
    :return: 当前函数的返回值 注释说明中的return是pycharm自动生成的
    """
    new_name = input('请输入姓名：')
    new_tel = input('请输入手机号：')
    new_qq = input('请输入QQ号：')
    for temp_info in info_list:
        # 我们在添加数据之前需要检测当前学生信息是否重复
        if temp_info['name'] == new_name:
            print('此用户名被占用，请重新输入...')
            return  # 当前return的作用是结束函数

    # 定义一个字典 使用字典保存学生的详细信息
    info = dict()

    # 向字典中添加数据
    info['name'] = new_name
    info['tel'] = new_tel
    info['qq'] = new_qq

    # 将字典数据添加到列表当中
    info_list.append(info)
    # print(info_list)


# 删除学生
def del_info():
    """
    删除学生信息
    :return:

    需要在列表中进行数据遍历
    """
    del_num = int(input('请输入你要删除的序号：'))
    # 因为列表中没有负数以及没有浮点数 所以需要对用户所输入的序号进行判断
    if 0 <= del_num < len(info_list):
        del_flag = input('你确定要删除么? yes or no: ')
        if del_flag == 'yes':
            del info_list[del_num]
        else:
            print('已取消...')
    else:
        print('序号输入有误, 请重新输入...')


# 修改学生
def modify_info():
    """
    修改学生信息
    :return:
    """
    # 获取用户修改学生信息的编号
    modify_num = int(input('请输入你要修改的学生信息的序号：'))
    if 0 <= modify_num < len(info_list):
        print('你要修改的信息是:')
        print(f"姓名: {info_list[modify_num]['name']}, 手机号: {info_list[modify_num]['tel']}, "
              f"QQ: {info_list[modify_num]['qq']}")

        info_list[modify_num]['name'] = input('请输入新的姓名: ')
        info_list[modify_num]['tel'] = input('请输入新的手机号: ')
        info_list[modify_num]['qq'] = input('请输入新的qq: ')

    else:
        print('序号输入有误, 请重新输入...')


# 查询单个学生信息
def search_info():
    """
    查询学生信息
    :return:
    """
    search_name = input('请输入你要查询的学生姓名: ')
    for temp_info in info_list:
        if temp_info['name'] == search_name:
            print('查询到的信息如下: ')
            print(f"姓名: {temp_info['name']}, 手机号: {temp_info['tel']}, QQ: {temp_info['qq']}")
            break
        else:
            # 在没有存储数据之前是无法执行当前代码的
            # 原因是在没有存储学生信息之前全局列表为空，没有字典数据，无法匹配
            print('没有找到指定的学生信息...')


# 查询所有学生信息
def print_all_info():
    """
    打印列表中的所有的字典中的信息
    :return:
    """
    print('序号\t\t姓名\t\t手机号\t\tQQ')
    i = 0
    for temp in info_list:
        print(f"{i}\t\t{temp['name']}\t\t{temp['tel']}\t\t{temp['qq']}")
        i += 1


# 创建一个函数负责调度当前这个系统的小功能
def main():
    """
    控制当前系统中的功能模块
    :return:
    """
    # 1. 打印当前系统的功能使用
    # 当前系统的功能模块可以放在函数入口之下 但是不建议
    # 在函数体中的代码是从上之下的 所以在执行到print_menu时python解释器会自动寻找当前函数
    while True:
        print_menu()
        # 2. 根据用户选择进行功能模块的调用
        num = input('请输入你要进行的操作(输入序号即可)：')

        # 3. 根据用户输入的序号进行判断并调用对应的函数
        if num == '1':
            add_new_info()
        elif num == '2':
            del_info()
        elif num == '3':
            modify_info()
        elif num == '4':
            search_info()
        elif num == '5':
            print_all_info()
        elif num == '6':
            exit_flag = input('确定要退出当前系统么? [yes or no]: ')
            if exit_flag == 'yes':
                break
            else:
                print('已取消...')


# 如果当前文件被当成一个包被其他py文件进行import引入的话
# 可以使用 __name__ 防止在其他文件中被执行
if __name__ == '__main__':
    main()

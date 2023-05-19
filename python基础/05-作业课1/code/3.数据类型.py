# L = ['a','b','c','a']
# # count方法的返回值 查找方法
# print(L.count('a'))
# print(L)

# L = ['a','b','c','a']
# print(L)
# print(id(L))
# # 不是单纯的删除，拿走
# a=L.pop()
# print(a)
# # 可变类型
# # 原值
# print(L)
# print(id(L))

# 字符串不可变类型
# 字符串字母全部变大写和变小写 lower,upper
# name = 'dahai'
# print(name)
# print(id(name))
# # 新值
# name=name.upper()
# print(name)
# print(id(name))






# 修改原值，列表可变类型
# list_data = [1, 2, 3]
# list_data.append('a')
# print(list_data)

name = "  dahai   dsb  "
#       0123456789012
print(name.index('b'))

list1 = ['真正的勇士','敢于直面惨淡的人生','敢于正视淋漓的鲜血']
print(','.join(list1))


# name = "  dahai   dsb  "
# print(name.upper())


# 把字符串msg的python字符提取出来
# msg = 'hello python'
# #      012345678901
# print(msg[6:12])
# print(msg[6:])
#
# print(msg.split()[1])

# 怎样取出L列表里面的    大海字符串

# L = ['夏洛',1,1.2,(1.22,{'name':[4,5,'大海']})]
# print(L[3][1]['name'][2])



'''
10.用户有这样的一条信息，姓名为翠花，年龄18岁，性别女，请定义一个字典包含了这些信息，然后进行一下操作

1.增加一个元素，地址为北京

2.将性别改为男

3.删除年龄

4.输出此字典

'''
user_dic = {'name':'翠花','age':18,'sex':'woman'}
# 1.增加一个元素，地址为北京
user_dic['address'] = '北京'
print(user_dic)
# 2.将性别改为男
user_dic['sex']  = 'man'
print(user_dic)
# 3.删除年龄
del user_dic['age']
print(user_dic)
# 4.输出此字典
print(user_dic)



'''
定义一个列表，列表中的元素有'安琪拉','妲己','韩信','典韦','吕布'五个元素，然后进行以下操作：

    1.末尾追加两个元素，'小乔','貂蝉'

    2.查找'妲己'的索引

    3.删除'韩信'

    4.将最后一个元素修改为'白起'

'''
list1 = ['安琪拉','妲己','韩信','典韦','吕布']
# 1.末尾追加两个元素，'小乔','貂蝉'
# list1.append('小乔')
# list1.append('貂蝉')
list1.extend(['大乔','貂蝉'])
print(list1)
# 2.查找'妲己'的索引
print(list1.index('妲己'))
# 3.删除'韩信'
list1.remove('韩信')
print(list1)
# 4.将最后一个元素修改为'白起'
list1[-1] = '白起'
print(list1)
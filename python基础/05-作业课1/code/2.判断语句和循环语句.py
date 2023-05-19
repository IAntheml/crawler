# n = 0
# while n < 8:
#     n += 1
#     if n == 3:
#         continue
#     print(n)

# 第8题
#
#     使用 while 循环输出 1 2  4 5 6  9 10
# start = 0
# while start < 10:
#     start += 1
#     if start == 3 or start == 7 or start == 8:
#         continue
#     print(start)

# start = 0
# while start < 10:
#     start += 1
#     if start in [3,7,8]:
#         continue
#     print(start)

# start = 0
# while start < 10:
#     start += 1
#     if start not in [3,7,8]:
#         print(start)

# 第9题
#
#     使用 while 循环输出 1+ 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10的和
# s = 0
# start = 0
# while start < 10:
#     start += 1
#     s += start
# print(s)
# # 全选 ctrl + /


# 第10题
#
#     判断1到10之间的奇偶数，如果是奇数，就输出奇数，如果是偶数，就输出偶数
#
#     需2种方式答题：while循环的方式，for循环的方式

# n = 0
# while n < 10:
#     n += 1
#     # print(n)
#     if n % 2 == 0:
#         print('%s是偶数'%n)
#     else:
#         print('%s是奇数'%n)
#
# for i in range(1,11):
#     if i % 2 == 0:
#         print('%s是偶数' % i)
#     else:
#         print('%s是奇数' % i)


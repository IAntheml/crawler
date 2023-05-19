_test = 1
print(_test)

# 在python中有一些英文单词是不可以被用作于声明标识符的 就是python内置的关键字
# int = 1
# print(int)
# 但是如果我在下方写了一下代码
str_number = '1'
# int是python中的内置函数 所以这个int名称不能作为一个变量名去使用
# 如果将python内置的一个功能名称作为一个变量名去使用的话则会发生python内置的方法失效
print(type(int(str_number)))




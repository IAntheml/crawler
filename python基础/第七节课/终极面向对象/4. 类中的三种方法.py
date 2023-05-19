class Foo(object):
    def __init__(self, name):
        self.name = name

    def old_func(self):
        """ 定义实例方法，至少有一个self参数 """
        # print(self.name)
        print('实例方法')

    @classmethod
    def class_func(cls):
        """ 定义类方法，至少有一个cls参数 """
        print('类方法')

    @staticmethod
    def static_func():
        """ 定义静态方法 ，无默认参数"""
        print('静态方法')


f = Foo("中国")
# 调用实例方法
f.old_func()

# 调用类方法
Foo.class_func()

# 调用静态方法
Foo.static_func()

# 通过实例对象调用静态方法与类方法
f.class_func()
f.static_func()

"""
不要在一个类中写同名方法！！！

    实例方法是使用在有不同的实例属性的值的情况下使用
    
    类方法在多个方法中共享一个变量的场景下使用
    
    静态方法在当前不需要任何这个类的属性和方法的使用可以进行使用
"""
class Province(object):
    # 类属性
    country = '中国'

    def __init__(self, name):
        # 实例属性
        self.name = name


# 创建一个实例对象
obj = Province('湖南省')
# 直接访问实例属性
print(obj.name)
# 通过类直接访问类属性
print(Province.country)

# 通过实例对象访问类属性
print(obj.country)




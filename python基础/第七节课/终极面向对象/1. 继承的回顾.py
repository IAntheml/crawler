# 创建一个类，在这个类中有基础功能
class Camera:
    def take_photo(self):
        """拍照功能"""
        print("正在拍照...")


class Telephone(Camera):
    def call(self):
        """打电话"""
        print("正在打电话...")

    def answer(self):
        """接电话"""
        print("正在接电话...")


phone = Telephone()
phone.call()
phone.answer()
phone.take_photo()

'''
通过上述代码发现 子类只需要继承父类就可以得到父类中的方法，无需重复编写
如果没有继承这种特性的话，那么只能在一个类中编写特别多的功能。在这种情况下无法很好的进行功能升级
'''

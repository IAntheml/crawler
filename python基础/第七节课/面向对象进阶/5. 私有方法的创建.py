# -*- coding: utf-8 -*-
# @Time    : 2022/10/17 9:26 下午
# @Author  : 顾安
# @File    : 5. 私有方法的创建.py
# @Software: PyCharm


class BankService:
    # 转账方法 私有方法
    def __bank_2_bank(self, money):  # 当前的money不是实例属性 只是一个方法中的普通的形参而已
        # 当前转账的具体代码省略...
        print(f'这里执行的是跨行转账的具体代码....金额为: {money}')
        return True  # 当前表示执行成功 成功执行时候返回一个True

    def transfer(self):
        money = int(input('请输入你要转账的金额: '))
        if money > 1000000:  # 你必须要达到银行的转账标准
            if self.__bank_2_bank(money): # 当前检测这个方法的返回值是不是一个True
                print('转账成功...')
            else:
                print('转账失败...')
        else:
            print('没钱就别转了...')


bs = BankService()
bs.transfer()

'''
如果你现在想要转账
    1. 你的金额必须要大于100万

如果你现在没有一百万
    能不能绕过检测金额的方法？

'''

# 私有方法也是不能在类的外部直接使用实例对象所调用
# bs.__bank_2_bank()


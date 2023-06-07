"""判断数据类型是否是可以迭代的"""

from collections.abc import Iterable
from collections.abc import Iterator
print(isinstance([], Iterable))

nums = [11, 22, 33, 44]

print(type(nums))

nums_iter = iter(nums)

print(type(nums_iter))

print("nums", isinstance(nums, Iterator))
print("nums_iter", isinstance(nums_iter, Iterator))
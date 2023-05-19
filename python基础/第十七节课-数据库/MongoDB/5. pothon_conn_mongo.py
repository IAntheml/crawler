# 导入
from pymongo import MongoClient

# 1. 链接
client = MongoClient(host='localhost', port=27017)
connection = client['mongo_data_info']['test_python']

# 2. 插入数据
# connection.insert_one({'name': '安娜', 'age': 18})

# 3. 插入多条数据
# data_list = [{"name": "test{}".format(i)} for i in range(10)]
# connection.insert_many(data_list)

# 4. 查询一条数据
t_1 = connection.find_one({'name': '安娜'})
print(t_1)

# 5. 查询多条数据 游标对象 1.遍历 2. 转为列表
t_2 = connection.find()
# print(t_2)
for item in t_2:
	print(item)
# print(list(t_2))

# 6. 更新数据
# connection.update_one({"name": "test1"}, {"$set": {"name": "new_test1"}})
# collection.update_many({"name": "test1"}, {"$set": {"name": "new_test1"}})


# 7. 删除数据
# connection.delete_one({'name': 'test9'})
connection.delete_many({'name': '安娜'})







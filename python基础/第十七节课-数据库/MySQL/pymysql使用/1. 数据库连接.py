# pip install pymysql

import pymysql


# 数据库连接函数
def db_connect():
	# 1. 创建数据库对象 [链接数据库]
	db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')

	# 2. 使用数据库对象创建一个游标对象
	cursor = db.cursor()

	# 3. 使用游标对象执行sql语句
	cursor.execute('select version()')

	# 4. 使用 fetchone() 获取单条数据
	data = cursor.fetchone()

	# 5. 打印数据
	print(data[0])

	# 6. 关闭数据库连接
	db.close()


db_connect()


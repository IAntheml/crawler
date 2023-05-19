import pymysql


# 数据库连接函数
def create_table():
	# 1. 创建数据库对象 [链接数据库]
	db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')

	# 2. 使用数据库对象创建一个游标对象
	cursor = db.cursor()

	# 3. 通过sql创建一个数据表
	cursor.execute('drop table if exists employee')

	# 4. 组织创建表的sql语句
	sql = """
		create table employee(
			first_name varchar(20) not null,
			last_name varchar(20),
			age int,
			sex varchar(1),
			income float, -- 这个地方只是演示代码效果 不要在货币字段中使用float
			create_time datetime
		);
	"""

	# 5. 执行sql
	try:
		cursor.execute(sql)
		print('执行成功...')
	except:
		print('执行失败...')
	finally:
		db.close()


create_table()













import pymysql
import datetime


def insert_data():
    db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')

    # 获取游标
    cursor = db.cursor()

    # SQL 插入语句
    sql = "insert into employee (first_name, last_name, age, sex, income, create_time) values " \
          "('%s', '%s', %d, '%s', %d, '%s')" % ('小', '王', 22, '男', 30000, datetime.datetime.now())
    # 执行 SQL 语句
    try:
        cursor.execute(sql)
        # 提交到数据库执行 当前pymysql自动开启事务 进行数据的增删改必须进行数据提交
        # 否则不生效
        db.commit()
        print('数据插入成功...')
    except Exception as e:
        print(f'数据插入失败: {e}')
        # 如果发生错误就回滚
        db.rollback()
    finally:
        # 关闭数据库连接
        db.close()


insert_data()
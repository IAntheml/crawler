import pymysql


def update_table():
    db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')
    cursor = db.cursor()
    sql = "update employee set age=age+1 where sex='%s'" % '男'
    try:
        cursor.execute(sql)
        db.commit()
        print('数据更新成功...')
    except Exception as e:
        print(f'更新失败: {e}')
        db.rollback()
    finally:
        db.close()


if __name__ == '__main__':
    update_table()
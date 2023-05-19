import pymysql


def delete_record():
    db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')
    cursor = db.cursor()
    sql = "delete from employee where age > %d" % 22
    try:
        cursor.execute(sql)
        db.commit()
        print('数据删除成功...')
    except Exception as e:
        print(f'数据删除失败: {e}')
        db.rollback()
    finally:
        db.close()


if __name__ == '__main__':
    delete_record()
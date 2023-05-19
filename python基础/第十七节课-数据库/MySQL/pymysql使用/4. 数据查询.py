import pymysql


def select_data():
    # 打开数据库连接
    db = pymysql.connect(host='localhost', user='root', password='root', db='python_test')
    # 获取游标
    cursor = db.cursor()
    # 查询语句
    sql = "select * from employee where income > %d" % 10000
    try:
        cursor.execute(sql)
        # 获取所有记录列表
        results = cursor.fetchall()
        print(results)
        print('\n')
        for row in results:
            first_name = row[0]
            last_name = row[1]
            age = row[2]
            sex = row[3]
            income = row[4]
            create_time = row[5]
            # 打印结果
            print(f'first_name: {first_name}, last_name: {last_name}, age: {age}, sex: {sex}, income: {income}, '
                  f'create_time: {create_time}')
    except Exception as e:
        print(f'查询错误: {e}')
    finally:
        db.close()


if __name__ == '__main__':
    select_data()

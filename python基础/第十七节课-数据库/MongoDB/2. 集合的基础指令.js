// 手动在数据库中创建集合
// options: 代表的是可选参数
db.createCollection(name, options)

// 如果大家的版本是高于3版本以上 命令小写
db.createCollection('stu')

// 指定集合有容量大小
db.createCollection('sub', {capped: true, size: 10})

// 查看当前所在的数据库中存在的集合
show collections

// 删除集合
db.集合名称.drop()
db.sub.drop()



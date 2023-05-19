/*
	插入一个数据
*/
// 如果切入到了一个不存在的数据库可以使用db.集合名称.insert() 去创建一个集合
// 当集合与数据成功插入之后 则数据库也会创建
db.stu_test.insert({"name": "xiaowang", "age": 18})

// 查询指定集合的数据
db.stu_test.find()

// 使用单引号进行数据插入
db.stu_test.insert({name: 'xiaohong', age: 20})

/*
	数据保存
*/
db.stu_test.insert({_id: 10010, name: 'xiaoming', age: 30})
// db.stu_test.insert({_id: 10010, name: 'xiaoming', age: 40}) 错误：_id重复
// 把原有数据进行覆盖
db.stu_test.save({_id: 10010, name: 'xiaoming', age: 40})


/*
	数据更新
*/
// 需求: 将原有的xiaowang修改为xiaozhao
db.stu_test.update({name: 'xiaowang'}, {name: 'xiaozhao'})  // 当前语句如果原数据有其它字段直接修改会遗失
db.stu_test.update({name: 'xiaoming'}, {$set: {name: 'xiaowang'}})  // $set: 修改指定字段并不会对其它字段造成影响

/*
	数据删除
*/
// 删除第一次出现的xiaowang的数据
db.stu_test.remove({name: 'xiaowang'}, {justOne: true})
// 删除所哟名为xiaowang的数据
db.stu_test.remove({name: 'xiaowang'})











// 测试数据
db.getCollection("products").insert([ {
    _id: 100,
    sku: "abc123",
    description: "Single line description"
} ]);
db.getCollection("products").insert([ {
    _id: 101,
    sku: "abc789",
    description: "First line\nSecond line"
} ]);
db.getCollection("products").insert([ {
    _id: 102,
    sku: "xyz456",
    description: "Many spaces before    line"
} ]);
db.getCollection("products").insert([ {
    _id: 103,
    sku: "xyz789",
    description: "Multiple\nline description"
} ]);
db.getCollection("products").insert([ {
    _id: 104,
    sku: "abc123",
    description: "Single line description"
} ]);



db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba04fce0a56f10342b6f3"),
    name: "郭靖",
    hometown: "蒙古",
    age: 20,
    gender: true
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba07cce0a56f10342b6f4"),
    name: "黄蓉",
    hometown: "桃花岛",
    age: 18,
    gender: false
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba0acce0a56f10342b6f5"),
    name: "华筝",
    hometown: "蒙古",
    age: 18,
    gender: false
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba0d2ce0a56f10342b6f6"),
    name: "黄药师",
    hometown: "桃花岛",
    age: 40,
    gender: true
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba0f1ce0a56f10342b6f7"),
    name: "段誉",
    hometown: "大理",
    age: 16,
    gender: true
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba10bce0a56f10342b6f8"),
    name: "段王爷",
    hometown: "大理",
    age: 45,
    gender: true
} ]);
db.getCollection("stu_info").insert([ {
    _id: ObjectId("626ba12cce0a56f10342b6f9"),
    name: "洪七公",
    hometown: "华山",
    age: 18,
    gender: true
} ]);





// 查询
db.集合名称.find({条件})

db.stu_info.find({age: 20}) // 查询所有符合条件的数据
db.stu_info.findOne({age: 18}) //  查询符合条件的第一条数据
db.stu_info.find().pretty()  // 对数据进行格式化输出


// 比较运算符 [条件查询]
db.stu_info.find({age: {$gte: 18}})  // 查询年龄大于等于18岁的数据

// 范围运算符
db.stu_info.find({age: {$in: [18, 28]}})

// 逻辑运算符
db.stu_info.find({age: 18, hometown: "桃花岛"}) // 并且
db.stu_info.find({$or: [{age: 18}, {hometown: "桃花岛"}]}) // 或者
db.stu_info.find(
	{
		$or: [{age: {$gte: 45}}, 
			{
			hometown: {
				$in:["桃花岛", "华山"]
			}
		}]
	}) // 整合应用


// 正则表达式查询
db.products.find({sku:/^abc/})  // ^ 代表以什么数据开头
db.products.find({sku: {$regex: "789$"}})  // $ 代表以什么数据结尾

// 翻页
db.products.find().limit(2) // 从第一条数据开始查询两条数据
db.products.find().skip(2) // 忽略前两条数据并查询除前两条数据之外的所有数据
db.products.find().skip(2).limit(2) // 组合使用


// 投影
db.stu_info.find({age: {$gt: 18}}, {name: 1, _id: 0})  // 关于0 1 只是作用于_id 其它字段不想显示直接不用写
db.stu_info.find({}, {name: 1, _id: 0}) // 无条件投影


// 排序
db.stu_info.find().sort({age: -1})
db.stu_info.find({age: {$gt: 18}}).sort({age: 1}) // 案例


// 统计
// 方式一
db.stu_info.find().count()
db.stu_info.find({age: {$gt: 18}}).count()
// 方式二
db.stu_info.count()
db.stu_info.count({age: {$gt: 18}})


// 数据去重
// 对地址进行去重
db.stu_info.distinct("hometown")
// 结合条件查询去重
db.stu_info.distinct("hometown", {age: {$gt: 20}})


// 分组
db.stu_info.aggregate(
  {
    $group: {_id: "$gender", counter: {$sum: 1}}
  }
)

db.stu_info.aggregate(
  {
    $group: {_id: "$gender", count: {$sum: 1}, avg_age: {$avg: "$age"}}
  }
)

db.stu_info.aggregate(
  {
    $group: {_id: null, counter: {$sum: 1}, avg_age: {$avg: "$age"}}
  }
)


// project
db.stu_info.aggregate(
  {
    $project: {_id: 0, name: 1, age: 1}
  }
)

db.stu_info.aggregate(
  {
    $group: {_id: "$gender", count: {$sum: 1}, avg_age: {$avg: "$age"}}
  },
  {
    $project: {"性别": "$_id", "人数统计": "$count", "平均年龄": "$avg_age", _id: 0}
  }
)

// 在管道中进行过滤
db.stu_info.aggregate(
  {
    $match: {age: {$gt: 20}}
  }
)

db.stu_info.aggregate(
  {
    $match: {age: {$gt: 20}},
  },
  {
    $group: {_id: "$gender", counter: {$sum: 1}}
  },
  {
    $project: {"性别": "$_id", "统计人数": "$counter", _id: 0}
  }
)


// 管道排序
db.stu_info.aggregate(
  {
    $sort: {age: 1}
  }
)
// 案例
db.stu_info.aggregate(
  {
    $group: {_id: "$gender", counter: {$sum: 1}}
  },
  {
    $sort: {counter: -1}
  }
)


// 管道翻页
db.stu_info.aggregate(
  {$limit: 2}
)

db.stu_info.aggregate(
  {$skip: 2}
)

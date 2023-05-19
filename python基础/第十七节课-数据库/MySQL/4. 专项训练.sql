-- 创建数据库
create database python_test_1 charset=utf8;

-- 使用数据库
use python_test_1;

-- students表
create table students(
    id int unsigned primary key auto_increment not null,
    name varchar(20) default '',
    age tinyint unsigned default 0,
    height decimal(5,2),
    gender enum('男','女','中性','保密') default '保密',
    cls_id int unsigned default 0,
    is_delete bit default 0
);

-- classes表
create table classes (
    id int unsigned auto_increment primary key not null,
    name varchar(30) not null
);


-- 向students表中插入数据
insert into students values
(0,'小明',18,180.00,2,1,0),
(0,'小月月',18,180.00,2,2,1),
(0,'彭于晏',29,185.00,1,1,0),
(0,'刘德华',59,175.00,1,2,1),
(0,'黄蓉',38,160.00,2,1,0),
(0,'凤姐',28,150.00,4,2,1),
(0,'王祖贤',18,172.00,2,1,1),
(0,'周杰伦',36,NULL,1,1,0),
(0,'程坤',27,181.00,1,2,0),
(0,'刘亦菲',25,166.00,2,2,0),
(0,'金星',33,162.00,3,3,1),
(0,'静香',12,180.00,2,4,0),
(0,'郭靖',12,170.00,1,4,0),
(0,'周杰',34,176.00,2,5,0);

-- 向classes表中插入数据
insert into classes values (0, "python_01期"), (0, "python_02期");


-- 查询所有字段
-- select * from 表名;
select * from students;


-- 对表名进行别名设置
select s.id, s.name from students as s;
select id as 序号, name as 姓名, gender as 性别 from students;


-- 消除重复行
-- select distinct 字段名 from 表名;
select distinct gender from students;


-- where 条件查询
-- select * from 表名 where 条件;
select * from students where id=1;

-- 比较运算符
-- 1. 查询编号大于3的学生
select * from students where id > 3;

-- 2. 查询编号不大于4的学生
select * from students where id <= 4;

-- 3. 查询姓名不是"小明"的学生
-- select * from students where name != '小明';
select * from students where name <> '小明';

-- 4. 查询没有被删除的学生
select * from students where is_delete=0;


-- 逻辑运算符
/*
	并且
	或者
	取反
*/

-- 1. 查询编号大于3的女同学
select * from students where id > 3 and gender='女';

-- 2. 查询编号小于4或者没有被删除的学生
select * from students where id < 4 or is_delete=0;

-- 3. 查询id不等于4的所有的学生
select * from students where not id=4;

-- 模糊查询
-- 1. 查询姓"黄"的学生
select * from students where name like '黄%';
select * from students where name like '周%';
select * from students where name like '周_';
select * from students where name like '黄%' or name like '_杰';


-- 范围查询
-- 1. 查询编号是1或者3或者8的学生 非连续的
select * from students where id in (1,3,8);

-- 2. 查询编号3到8的学生 连续的
select * from students where id between 3 and 8;

-- 3. 查询编号从3到8的男生
select * from students where id between 3 and 8 and gender='男';
select * from students where (id between 3 and 8) and gender='男';

-- 空判断
-- null和''不是同一个对象
-- 1. 查询没有填写身高的学生
select * from students where height is null;

-- 2. 查询有身高数据的学生
select * from students where height is not null;

-- 3. 查询有身高数据的女学生
select * from students where height is not null and gender='女';


-- 数据排序
-- 1. 查询未删除男生信息，按学号降序
select * from students where gender='男' and is_delete=0 order by id desc;

-- 2. 查询未删除男生信息，按学号升序(默认升序)
select * from students where gender='男' and is_delete=0;

-- 3. 查询未删除男生信息，按姓名升序 (按字节排序)
select * from students where gender='男' and is_delete=0 order by name;

-- 4. 组合排序 查询女生学生信息 按照年龄升序排序 如果多个数据年龄相同则按照id倒序
select * from students where gender='女' order by age, id desc;


-- 聚合函数
-- 总数
-- 查询students中的总行数
select count(*) from students;

-- 最大值
-- 查询女生的编号的最大值
select max(id) from students where gender='女';

-- 最小值
select min(id) from students where gender='女';


-- 求和
-- 查询未删除的女生的总年龄
select sum(age) from students where gender='女' and is_delete=0;


-- 平均值
-- 查询未删除女生的编号的平均值
select avg(id) from students where gender='女' and is_delete=0;


-- 分组
-- group by + group_concat()
select gender, group_concat(name) from students group by gender;

-- group by + 聚合函数
-- 1. 分别统计性别为男/女同学的年龄平均值
select gender as 性别, avg(age) as 平均年龄 from students group by gender;

-- 2. 统计男/女同学的人数
select gender,count(*) from students group by gender;


-- group by + having
-- 查询学生表，根据性别进行分组 显示各个性别中的个数 并且每个分组的统计个数必须大于2
select gender,count(*) from students group by gender having count(*)>2;


-- 分页
-- select * from 表名 limit strat, count;

-- 1. 查询前三名男同学
select * from students where gender='男' limit 0, 3;

-- 2. 查询学生表中的前两位同学
select * from  students limit 2;

-- 3. 查询前五条数据
select * from students limit 0, 5;

-- 4. 查询id为 6 - 10 的数据 用户设置的开始位置 - 1 第二个参数为当前数据个数
select * from students limit 5, 5;

-- 5. 查询id 11 - 14 的数据 作业

















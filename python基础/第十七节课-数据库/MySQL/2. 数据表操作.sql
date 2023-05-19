-- 1. 查询当前数据库之下的所有的表
show tables;


-- 2. 创建表
create table classes(
	-- 字段
	-- unsigned 无符号[不能为负数]
	id int unsigned auto_increment primary key not null,
	-- 如果声明的是最后一个字段 当前这个字段的结尾不能加逗号
	name varchar(10)
);

create table students(
	id int unsigned auto_increment primary key not null,
	name varchar(20) default '',
	age tinyint unsigned default 0,
	height decimal(5, 2),
	gender enum('男', '女', '人妖', '未知'),
	cls_id int unsigned default 0
);

-- 3. 查看当前表结构
desc 表名;

-- 4. 添加字段
alter table 表名 add 字段名 类型;
alter table students add birthday datetime;

-- 5.1 修改字段 - 重命名版本
alter table 表名 change 字段原名 字段新名 类型 [约束];
alter table students change birthday birth datetime not null;


-- 5.2 修改字段 - 不重命名版本
alter table 表名 modify 原字段名 类型 [约束];
alter table students modify birth date;


-- 6. 删除字段
alter table 表名 drop 字段名;
alter table students drop birth;

-- 7. 查看表的创建过程
show create table 表名;
show create table students;


-- 8. 删除表
drop table 表名;
drop table classes;














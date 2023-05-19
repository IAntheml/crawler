-- 1.1 字段通配查询 
select * from students;
/*
	*: 代表的是通配符
		字段名
*/

-- 1.2 指定字段查询
select id, name from students;


-- 2.1 全字段插入 如果有默认值在全字段插入时也需要写值
insert into 表名 values (数据1, 数据2,...);
insert into students values(0, '安娜', 18, 178.22, '未知', 0);

-- 2.2 部分字段插入
insert into 表名(字段名1, 字段名2,...) values (数据1, 数据2,...);
insert into students (id, name, age, height, gender) values (0, '双双', 16, 152.44, '女');

-- 2.3 多行插入
insert into 表名 values(...),(...);
insert into classes values(0, 'python一班'), (0, 'python二班');


-- 3. 数据修改
update 表名 set 字段1=值1, 字段2=值2... where 条件;
update students set gender='人妖' where id=1;

-- 4.1 物理删除
delete from 表名 where 条件;
delete from students where id=2;

-- 4.2 逻辑删除
/*
	如果一张表中有一个字段表示是否删除
		那么当前这种删除方式被称之为逻辑删除

	比如说有一张表中有一个字段为is_delete

	is_delete=0 False
		则在页面中显示数据

	is_delete=1 True
		则隐藏数据

		数据本身在数据库中是存在的


删除xxxx账号 注销
	不一定 status=0   状态=false
*/




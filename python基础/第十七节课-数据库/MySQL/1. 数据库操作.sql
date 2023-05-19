-- 1. 通过指令进入到数据库 如果有密码需要输入密码进入
mysql -uroot -p


-- 2. 查看数据库
show databases;

-- 3. 进入指定的数据库
use 数据库名称;

-- 4. 查看当前使用的数据库
select database();

-- 5. 创建数据库
create database 数据库名称 charset=utf8;

-- 6. 查看数据库创建过程
show create database 数据库名称;

-- 7. 删库 你没有删除权限
-- 账号系统
drop database 数据库名称;

-- 8. 退出MySQL交互模式
\q


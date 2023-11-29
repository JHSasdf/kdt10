create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', "M", '') default '',
    birthday Date not null,
    age int(3) not null default 0
);

insert into user
values ('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
('sesysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
('widnomaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);


select * from user order by birthday;
select * from user where gender = "M" order by name desc;
select id, name from user where birthday like '199%';
select * from user where birthday like '%-06-%' order by birthday;
select * from user where gender = "M" and birthday between '1970-01-01' and '1979-12-31';
select * from user order by age desc limit 3;
select * from user where age >= 25 and age <= 50;
update user set pw = "12345678" where id = 'hong1234';
delete from user where id = 'jungkrat';
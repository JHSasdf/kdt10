select * from mysql.user;
drop user 'user2'@'%';

-- 유저 생성
create user 'user'@'localhost' identified by '1234';
-- 유저 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;

-- 현재 사용중인 MySQL 캐시 지우고 새로운 설정 적용
flush privileges;
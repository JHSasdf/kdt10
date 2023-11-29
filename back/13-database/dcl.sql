-- DCL
-- 사용자에게 권한 부여 명령어
GRANT permission_type ON dbname.tablename TO username@host IDENTIFIED BY 'wl2gns3!@#'
[with grant option];

-- 호스트: 로컬 호스트 모든 db, 모든 table에 모든 권한
-- GRANT all privileges on *.* to 'user'@'localhost' IDENTIFIED BY '4321' [with grant option];

-- 권한 확인
show grants;

-- 1. 계정 생성
create user 'user'@'localhost' IDENTIFIED BY '4321';
select * from mysql.user; -- 현재 존재하는 계정 확인
flush privileges; -- 저장

-- "%"권한 가진 계정 먼저 생성
create user 'user2'@'%' IDENTIFIED BY '4321';

GRANT all privileges on *.* to 'user2'@'localhost' with grant option;
GRANT all privileges on *.* to 'user'@'localhost' with grant option;
GRANT all privileges on *.* to 'user'@'%' with grant option;

-- 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 계정 삭제
drop user 'user'@'localhost';

-- 계정 수정
alter user 'user2'@'%' identified by '1234';

-- 저장 
flush privileges;

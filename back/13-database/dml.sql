INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- SELECT 조회
select * from customer where phone = '01022223555';
select custid, custname from customer;

-- <WHERE 조건>
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합 조건: AND, OR, NOT


-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select custname, birth from customer where custname = '강해린';
-- 고객 이름이 강해린이 아닌 고객
select custname, birth from customer where custname != '강해린';
-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- 범위 
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >= '1995-01-01' and birth <= '2000-12-31';
desc customer;

-- 집합
-- 주소가 서울 혹은 런던인 고객을 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';

-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 '미국 로스엔젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소가 '미국'이 포함되어있는 고객
-- %: 0개 이상의 문자열
select * from customer where addr like '미국%';

-- 고객 이름에 두 번쨰 글자가 '지'인 고객 검색
-- _: 임의의 한 글자 (하나의) 문자를 의미
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 형지

-- 고객 이름에 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수';
select * from customer where custname like '%수'; -- 이름이 몇자든, 마지막 글자가 '수'

-- 복합 조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년생 이후 출생인 고객 검색
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';
-- 주소지가 영국이거나 미국인 고객 검색
select * from customer where addr like '영국%' or addr like '미국%';

-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%4';

-- < ORDER BY>
-- order by: default 값은 pk 기준으로 오름차순 정렬
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

-- where 절과 order by 함께 사용 (이떄 order by가 where 보다 뒤에 있어야 함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;

-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순
select * from customer where birth >= '2000-01-01' order by addr, custid desc;

-- < LIMIT >
-- 행의 개수(결과값의 개수)를 제한
select * from customer limit 3;
select * from customer where birth >= '2000-02-24' limit 3;

-- order 테이블을 만들기
-- 외래키 갖고 있게 만들 것

-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블: 기본키를 갖는 테이블 (customer)
-- 참조 테이블: 외래키가 있는 테이블 (order)
-- 형식: FOREIGN KEY(열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade: 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경
-- on delete cascade: 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제
create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK,
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
);

-- 테이블을 삭제할 경우 삭제 순서!
-- customer table과 orders table은 customer.custid 를 기준으로 "관계"를 맺음
-- customer table에 존재하는 회원만 orders table에 데이터를 추가할 수 있음
-- 만약 orders 테이블이 있는데, customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날아갔기 때문에 알 수 없음
-- pk -fk 연결된 테이블은 외래키가 설정된 테이블 (참조 테이블) 먼저 삭제
-- (1) orders table 삭제 -> (2) customer 테이블 삭제


-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰이는 케이스가 多
select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;
-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미 있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- total_amount, avg_amount, min_price, max_price
select sum(amount) as total_amount, avg(amount) as avg_amount,
 min(price) as min_price, max(price) as max_price from orders;

-- 주문 테이블에서 총 주문 건수 (= orders 튜플 개수)
select count(*) from orders;
-- 주문 테이블에서 주문한 고객 수 (중복 없이, distinct: 중복 제거)
select count(distinct custid) as numOfCust from orders;

-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) as numOfOrders from orders group by custid;

-- 고객별로 주문한 총 주문액
select custid, sum(price * amount) from orders group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- < HAVING >
-- group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량구하기
select custid, sum(amount), sum(price * amount) from orders
group by custid having sum(price * amount) >= 10000;

-- where로 총 주문액 검사 (err code 1111. where절은 개별 행에 대한 조건을 검사함.)
select custid, sum(amount), sum(price * amount) from orders where sum(price * amount) >= 10000
group by custid; 

-- 위와 동일한 조건 + 단, custid가 'bunny'인 고객 제외
-- where + group by + having 모두 사용한 예시 (순서 주의)
select custid, sum(amount), sum(price * amount) from orders where custid != 'bunny'
group by custid
having sum(price * amount) >= 10000;

-- having + and
select custid, sum(amount), sum(price * amount) from orders
group by custid
having sum(price * amount) >= 10000 and custid != 'bunny';

-- group by 주의사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

/*
where vs having

having 
- 그룹에 대해서 필터링 (그래서 group by와 함께 쓰임)
- group by 보다 뒤에 위치

where
-각각의 행을 필터링
-group by보다 앞에 위치
-집계함수 사용 x
*/

-- group by 주의사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

-- UPDATE
-- 수정 : update 테이블명 set 필드1=값1 where 필드2=조건2;
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경
update customer set addr='대한민국 서울' where custid = 'happy';
select * from customer where custid = "happy";

-- delete
-- 삭제 : delete from 테이블명 where 필드1=값1;
delete from customer where custid='happy';

-- customer 테이블에서 'kiwi'고객을 삭제했을 때, 주문 테이블에서 'kiwi' 고객의 주문 정보가 함께 삭제되는지 확인
delete from customer where custid="kiwi";
select * from customer where custid= "kiwi";
select * from orders where custid="kiwi";


-- join

-- JOIN
select * from customer, orders;

-- customer, order 테이블의 행 개수 구하기
select count(*) from customer; -- 14
select count(*) from orders; -- 16
select count(*) from customer, orders; -- 224 = 14 * 16
-- => cross join

-- where절을 이용해서 조인 조건을 추가
-- 테이블이름.속성: 어느 테이블의 속성인지 가리킴
select * from customer, orders where customer.custid = orders.custid order by customer.custname;

select * from customer inner join orders on customer.custid = orders.custid;
select * from customer left join orders on customer.custid = orders.custid;
select count(*) from customer right join orders on customer.custid = orders.custid;

-- inner join
-- '고객이름'과 고객이 주문한 상품명, 상품가격 조회
select customer.custname, orders.prodname, orders.price from customer 
inner join orders on customer.custid = orders.custid;

-- 고객 이름별로 주문한 제품의 총 구매액을 구매액 기준으로 오름차순 정렬
select customer.custname, sum(orders.price * orders.amount) as total_price from customer 
inner join orders on customer.custid = orders.custid group by custname
order by total_price;

-- OUTER JOIN
-- Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다.
-- 이 때, 왼쪽 테이블의 row를 유지하면 Left Outer Join,
-- 오른쪽 테이블의 row를 유지하면 Right Outer Join이다.

-- teaches 테이블 생성
create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

-- left outer join
select * from instructor I left outer join teaches T on I.id = T.id;
select * from teaches T left outer Join instructor I on I.id = T.id;
select * from instructor I inner join teaches T on I.id = T.id; 

-- right outer join
select * from instructor I right outer join teaches T on I.id = T.id;
select * from teaches T right outer join instructor I on I.id = T.id;


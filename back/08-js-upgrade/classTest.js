// 클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해서 사용

// 집 이라는 클래스
/**
 * 속성:
 * 만들어진 연도, 집의 이름, 창문 갯수 등등
 * 메소드: 창문 갯수 출력하는 메소드, 집의 이름 출력하는 메소드
 */

// 클래스 정의
class House {
    // 생성자 함수
    // 클래스를 이용해 객체를 생성할 때마다 속성을 초기화
    constructor(year, name, window) {
        this.year = year,
        this.name = name,
        this.window = window
    }

    // 메소드 1 : 집의 나이를 출력
    getAge() {
        console.log(`${this.name}는 건축한지 ${2023 - this.year}년 됐다!`)
    }

    // 메소드 2: 창문 갯수 출력
    getWindow() {
        console.log(`${this.name}의 창문 갯수는 ${2023 - this.year}개 이다.!`)
    }
}

// 클래스 이용해서 객체, 인스턴스 생성
const house1 = new House(2010, '아파트', 10);
console.log('house1 > ', house1);
console.log(house1.name);
house1.getAge();
house1.getWindow();
console.log();
const house2 = new House(2012, '빌라', 20);
console.log('house1 > ', house1);
console.log(house2.name);
house2.getAge();
house2.getWindow();

// 클래스 상속
class Apartment extends House {
    constructor(year, name, window, floor) {
        // 부모 객체에서 상속을 받음. => 상속받은 부모 클래스의 생성자를 호출
        super(year, name, window);
        this.floor = floor;
    }

    getFloor() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 층수는 ${this.floor}입니다.`;
    }
    //오버라이딩
    // 부모 클래스에 정의되어 있는 메소드를 이름을 동일하게 쓰되, 내용은 다르게
    getAge() {
        return `${this.year}년에 지어진 ${this.name} 아파트의 층수는 ${this.floor}입니다. 는 ${2023 - this.year}살`
    }
}
const apt1 = new Apartment(2022, '래미안', 100, 30);
console.log(apt1);
console.log(apt1.getAge());

class Shape {
    constructor(col, row) {
        this.col = col,
        this.row = row
    }

    getArea() {
        return this.col * this.row;
    }
}

class Rectangle extends Shape {
    getDiag() {
        return Math.sqrt((this.col**2) + (this.row**2));
    }
}

class Triangle extends Shape {
    getArea() {
        return this.col * this.row / 2;
    }
}

class Circle extends Shape {
    constructor (col, row, radius) {
        super(col, row);
        this.radius = radius;
    }

    getArea() {
        return `${this.radius**2}π`;
    }
}

let rec1 = new Shape(3,4);
console.log(rec1.getArea());
console.log();
let rec2 = new Rectangle(6,8);
console.log('직사각형 대각선:', rec2.getDiag());
let triangle = new Triangle(3,6);
console.log('삼각형 넓이: ', triangle.getArea());
let circle = new Circle(3, 6, 2);
console.log('원의 넓이', circle.getArea());
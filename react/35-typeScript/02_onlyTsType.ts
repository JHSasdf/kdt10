// interface는 typeScript의 클래스 기능이라고 생각하면 되고
// type은 number, string 같은 type을 커스텀으로 지정할 수 있는 것

// tuple type
let drink: [string, string, number] = ['coke', 'sider', 3];
drink[0] = '콜라';
drink[1] = '사이다';
// drink[3]; // tuple의 index를 넘기 때문에 error 발생

// push는 예외로 추가가 된다. 요소 추가는 가능하지만 Tuple 타입을 이용하는 이유가 사라짐. readonly를 쓰면 고정되지만 값도 바뀌지 않음
drink.push('환타');

console.log(drink);
console.log(drink.length);

// readonly: 요소 타입과 순서와 길이를 고정
let drink2: readonly [string, string, number] = ['사이다', '콜라', 1500];
// drink2[0] = '콜라'; // 에러
// drink2.push('gg'); // 에러

// enum type
enum Auth {
    admin = 0,
    user = 1,
    guest = 2
}
console.log(Auth);
console.log(Auth.user); // 1
console.log(Auth['0']); // 'guest'

enum Cafe {
    americano = '아메리카노',
    latte = '라떼'
}
console.log('Cafe :', Cafe);

enum Cake {
    choco,
    cream,
    fruit = '과일케이크'
}
console.log('Cake :', Cake);

// any 명시적으로
let value: any;
value = 1;
value = 'str';
value = false;
value = null;
value = [1, 2, '3', [124, 2]];

// any 암묵적으로
let value2;
value2 = 100;
value2 = 'str2';

///////////////////////////////////////////////////////////////////////////////////////////////////////

// type & interface

// interface
interface Student {
    name: string,
    isPassed: boolean
};

const student: Student = {
    name: 'jihun',
    isPassed: true
};

const student2: Student = {
    name: 'layla',
    isPassed: true
};

// object 타입 사용시 interface에서 지정한 key 타입의 강제가 사라짐.
const student3: object = {
    name: 'yuki',
    something: 3
};

// interface 상속
enum Score {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    F = 'F',
}

interface BaseballClub extends Student {
    position: string,
    height: number,
    backNumber?: number // 추가하지 않아도 되는 값
    [grade: number]: Score; // Key 타입 지정
}

const otani: BaseballClub = {
    name: 'otani',
    isPassed: true,
    position: 'pitcher',
    height: 193,
    // backNumber: 7,
    1: Score.A // 1: 'A' // Score를 상속받음 그래서 없어도 됨
};
console.log(otani);


// type
type Gender = 'Female' | 'Male';
const gender: Gender = 'Female'; // Female, Male 둘 중 하나만 가능, 아닐 경우 type error

// enum vs type
enum UserNumber {
    one = 1,
    two = 2,
    ten = 10,
}
type UserNumber2 = 1 | 100;

const numFromEnum: UserNumber = UserNumber.ten;
const numFromType: UserNumber2 = 1;

// 교차 타입 : 두 개 이상의 타입을 합치는 것
interface Toy {
    name: string,
    price: number,
    block: string 
}

interface Car {
    name: string,
    price: number,
    color: string
}

type ToyCar = Toy & Car;

const toyCar: ToyCar = {
    name: '타요',
    price: 13000,
    color: 'blue',
    block: 'B'
}

type Person = {
    name: string;
    age: number;
    hobby: string [];
    gender: Gender
};

const jihun: Person = {
    name: 'jihun',
    gender: 'Male',
    age: 20,
    hobby: ['baking', 'sleep']
};
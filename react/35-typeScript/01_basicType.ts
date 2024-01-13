// 명시적으로 타입 지정
let a: number = 1;
a = 5;
console.log(a);
// a = 'hi!';  // type error
console.log(typeof a);

let b: string = 'str';
let c: boolean = true;
let d: null = null;
let e: undefined;

// type 추론 (암묵적으로 타입 지정됨)
let aa = 5;
let bb = 'Hello';
let cc = false;
let dd = null;
let ee: any;

// 배열 타입을 지정하는 방법

// 1. type[]
let numArr: number[] = [1, 2, 3];
// numArr = ['1', '2', '3', '4' ,'5']; // type error

// 2. Array<type>
let strArr: Array<string> = ['coffee', 'latte', 'steam milk', 'mocca'];

// 배열의 원소가 여러 타입일 경우
let arr1: (number | string | number[])[] = [1, 'hi', [1,2,3,4]];

// 어떤 자료형이든 상관 없는 배열
let arr2: any[] = [1, 'str', true, [1,2,3,4], {name: 'jihun'}, ['1', 2, '3', true]];
console.log(arr2);
console.log(typeof numArr); // 그냥 오브젝트로 퉁친다
console.log(typeof strArr);

// 객체
let obj: object = {
    name: 'layla',
    gender: 'female'
};

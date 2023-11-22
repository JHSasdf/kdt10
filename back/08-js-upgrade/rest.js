// rest 파라미터

// 1. 함수에서 rest 파라미터 사용

const values = [1, 2, 3, 4, 5];


// 함수 선언 (rest사용) 굳이 이름 rest 아니어도 됨.
function get(a, b, ...rest) {
    console.log('a > ', a);
    console.log('b > ', b);
    console.log('rest > ', rest);
}

// 함수 호출
get(...values);
console.log()

// 2. 객체에서 rest
const icecream = {
    flavor: 'choco',
    price: 1000,
    company: 'bingre',
}

const { flavor, ...rest} = icecream;
console.log(flavor); // choco
console.log(rest); // 나머지
console.log()

// 3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest1] = number;
console.log(one);
console.log(two);
console.log(rest1);
// rest 파라미터

// 1. 함수에서 rest 파라미터 사용

const values = [1, 2, 3, 4, 5];


// 함수 선언 (rest사용) 굳이 이름 rest 아니어도 됨. 배열이나 객체 안의 스프레드 시트는 해당 배열이나 객체를 해체해서 하나씩 반환하고, 요소 하나하나의 스프레드시트는 배열로 반환한다,
function get(a, b, ...rest) {
    console.log('a > ', a);
    console.log('b > ', b);
    console.log('rest > ', rest);
}

// 함수 호출
get(...values);
get(1,5,3,5,7,6,8);
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
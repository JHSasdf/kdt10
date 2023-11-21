// 구조분해할당 : 구조를 분해해서 변수에 할당

// 1.객체를 구조분해

const cookie = {
    choco: '초코맛',
    vanilla: '바닐라맛',
    mint: '민트',
}

console.log(cookie.choco);
console.log('-------------------------')

// -> 객체 구조분해하기 (순서 상관 없음.)

const {mint, choco, vanilla} = cookie;

console.log(mint, choco, vanilla);


console.log('-------------------------')
// -> 배열 구조분해하기

const arr = ['first', 'second'];

const [one, two] = arr;

console.log(one, two);
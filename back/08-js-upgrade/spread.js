// spread연산자
// iterable에 대해서 단일요소로 압축 해제

// 배열에서
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

// 문자열에서
const str = 'i\m starving!'
console.log([...str]); // 아래와 동일
console.log(str.split('')); // 위와 동일


// -----------------------------------------------------------------------------------
// 함수에서 스프레드 연산자
function func(...val) {
    console.log('val:', val);
    const result = val;
    return result;
}

console.log('배열 떼기',...func(1,2,2,6,8,7));


// ----------------------------------------------------------
// 객체

const chip = {
    base: 'chip',
    company: 'lotte'
}

const potatoChip = {
    ...chip,
    flavor: 'onion'
}

const sweetPotatoChip = {
    ...potatoChip,
    flavor: 'sweet onion'
}

console.log('chip: ', chip);
console.log('potatoChip', potatoChip);
console.log('sweetpotato', sweetPotatoChip);

const word1 = 'abc', word2 = 'xyz';
console.log([...word1, ...word2]);


// 구조분해할당

// 1. 배열 구조분해할당
// What's important is Order!

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];
//---------------------------------------------------------------------------------
const [one, two, three, four, five] = arr1;
console.log(one, two, four, five, three);
const [x, y, z, alpha ] = arr2; // alpha에는 기본값이기 때문에 할당가능한 배열이 있다면 무시, 없으면 기본값 할당. 그것도 없으면 undefined
console.log(x, y, z, alpha);
//---------------------------------------------------------------------------------
const list = ['apple', 'orange'];
const [f1, f2, f3 = 'banana'] = list;
console.log(f1, f2, f3);

//---------------------------------------------------------------------------------
let num1 = 1, num2 = 3;
console.log('swap이전', 'num1:', num1, 'num2:', num2);
[num1, num2] = [num2, num1];
console.log('swap이후', 'num1:', num1, 'num2:', num2);
//-------------------------------------------------------------------------------------------------


// 2. 객체 구조분해할당
// key 값과 변수 명이 일치
const obj = {
    title: '독전2',
    star: 1,
    content: '제발 보지 마라..'
}

// 구조분해 안하면
    console.log(obj.title, obj.star, obj.content);

// 구조분해
// key가 없는 경우 대비해서 defalut값 있음.
const { content, star, title, price=1000} = obj;
console.log(title, star, content, price);

const { c, s, t } = obj;
console.log(c,s,t);

// 콜론을 이용해서 새 변수명으로 바꿔 저장 가능
const { content: c1, star: s1, title: t1} = obj;
console.log(c1,s1,t1);

//---------------------이용법 예시-----------------------------------------------------

const info = {
    name: 'web-dev',
    time: '09~14',
    content: 'I\'m So starving'
}

function getInfo(lecture) {
    // console.log(lecture);
    const { name, time, content } = lecture;
    const sentence = `이름: ${name} 시간: ${time} 컨텐츠: ${content}`
    return sentence;
}
const result = getInfo(info);
console.log(result);


// ---------------------------------------------------------------------------------------
// 단축평가
// &&, ||
// A && B : 두 개의 피연산자 모두 true라면 true를 반환
// A || B : 두 개의 피연산자 중 하나만 true 라면 true를 반환

console.log(1> 0 && 3 > 1); // true, true
console.log(1> 0 && 3 < 1); // true, false
console.log(1> 0 || 3 < 1); // true, false
console.log(1> 0 || 3 > 1); // true, true

// && 논리곱
const v1 = 5, v2 = 7;
const result2 = v1 > v2 && 'v1이 큼';
console.log('2',result2);

const result3 = v1 < v2 && 'v1이 큼';
console.log(result3);

const result4 = 'v1이 큼' && v1 < v2 ; // &&의 경우 마지막 것이 들어감.
console.log('4',result4);

const result7 = 'v1이 큼' && 'ㄴㄹㄴㄹㄴ' ; 
console.log(result7);

const result8 = 'ㄴㄹㄴㄹㄴ' && 'v1이큼' ;
console.log(result8);

// || (논리합)
const result5 = v1 || 100; // 앞에 값이 true라서 뒤에는 검사 x
console.log(result4);

const nameEx = '홍길동'
const nameEx2 = null;
console.log(nameEx || '이름x'); // 홍길동
console.log(nameEx2 || '이름x'); // 이름x
// crypto - nodejs의 내장모듈
const crypto = require('crypto');
const { create } = require('domain');

// 1. crypto '단방향' 암호화 구현
// createHash()
// : 지정한 해시 알고리즘으로 해시 객체를 생성하는 암호화 방식

// - password를 sha512 방식으로 암호화 하고,
// - base64 방식으로 인코딩하여 리턴하는 함수

const createHashedPW = function(password) {
    // createHash(알고리즘).update(암호화할 값).digest(인코딩 방식)
    return crypto.createHash('sha512').update(password).digest('base64');
}

// 해시함수의 한계 : 레인보우 테이블
// => 암호화된 비밀번호를 빠르게 역추적해서 원본 비밀번호를 찾아낼 수 있음.
// console.log(createHashedPW('wlgns'));
// console.log(createHashedPW('wlgns    '));
// console.log(createHashedPW('wlgns   '));


/////////////////////////////////////////////////////
// 2. pbkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
// - 비밀번호 기반 키 도출 함수, 주로 비밀번호 저장시 사용
// - buffer 형식의 데이터를 반환하기 때문에 -> toString() 이용해서 문자열로 반환

// 1. 단방향 암호화 생성 함수
// 1) 임의의 솔트 값을 생성
// 2) 해당 솔트와 제공된 비밀번호를 기반으로 해시 생성
// 3) 생성된 솔트와 해시를 반환
function saltAndHashPW(password) {
    const salt = crypto.randomBytes(16).toString('base64'); // 임의의 salt 생성
    const iteration = 100; // 해시 함수를 반복할 함수
    const keylen = 64;
    const algorithm = 'sha512';

    // hash 생성 => salt와 password를 결합해서 해시를 생성
    const hash = crypto.pbkdf2Sync(password, salt, iteration, keylen, algorithm).toString('base64'); // buffer -> string
    return { salt, hash};
} 
// 2. 암호 비교 함수
// : inputPW = 제공된 비번, salt, hash를 기반으로 새로운 해시를 생성하고,
// 새로운 해시와 저장된 saveHash를 비교
// 제공된 비번이랑 원래 비번이 같으면 두 해시값도 일치
function checkPW(inputPW, savedSalt, savedHash) {
    const iteration = 100; // 해시 함수를 반복할 함수
    const keylen = 64;
    const algorithm = 'sha512';
    const hash = crypto.pbkdf2Sync(inputPW, savedSalt, iteration, keylen, algorithm).toString('base64'); // buffer -> string
    return savedHash === hash; // 같다면 true, 다르면 false
}

// 사용 예제
const password = '1234!';

// 비밀번호 암호화
const { salt, hash } = saltAndHashPW(password);
console.log(`비번 암호화에 쓰인 salt = ${salt}, 암호화된 hash = ${hash}`);

// 비밀번호 확인
const inputPW = '1234!';
const isMatched = checkPW(inputPW, salt, hash);
console.log('비밀번호는 맞는가?', isMatched);
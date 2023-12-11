// bcrypt
// : 비밀번호를 암호화 하는 알고리즘 중의 하나
// : 주로 강력한 보안 필요할 때 사용
// : blowfish라는 암호를 기반으로 설계된 단방향 암호화 함수

const bcrypt = require('bcrypt');

const originalPW = '1234'; // 원본 비번

const saltRounds = 10; // 솔트 라운드 수 정의, int

// 1. 비밀번호 해싱 함수
function hashPW(password) { 
    return bcrypt.hashSync(password, saltRounds); // salt를 자동으로 생성
}

// 2. 원본 비밀번호와 해시된 비밀번호가 일치하는지 확인
// 같은지, 다른지만 알려줌
function comparePW(password, hashedPW) {
    return bcrypt.compareSync(password, hashedPW);
}

// 사용 예제
// 원본 비번을 해싱한 결과
const hashedPW = hashPW(originalPW);
console.log(`Hashed PW: ${hashedPW}`);

const isMatch = comparePW(originalPW, hashedPW); // true
const isMatch2 = comparePW('heelo', hashedPW); // false
console.log('비밀번호는 같은가.', isMatch);
console.log('match2의 비밀번호는 같은가', isMatch2);

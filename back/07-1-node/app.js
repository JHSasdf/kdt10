// math 모듈을 불러와서 사용

// const adds = require('./math');
// import { add } from "./math.js";
// console.log(add(5,7));

const math2 = require('./math2');
console.log(math2.addmen(3,7));
console.log(math2.PI)
console.log(math2.E);


// console.log('--------------------------------');

// 구조분해 할당은 내보낸 값과 동일한 이름으로 가져와야함.
const {addmen, E, PI} = require('./math2');
console.log(PI);
console.log(E);
console.log(addmen(45,43));
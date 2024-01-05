const a = {name: 'jihun'};
const b = {name: 'jihun'};
const c = b;
// 위에꺼는 둘다 false, 왜냐, == 해도 주소값으로 비교하는 듯.
console.log('a == b',a == b);
console.log('a === b', a === b);


// 이건 원시값이라서 둘 다 true
console.log(a.name == a.name);
console.log(a.name === a.name);


// 주소값이 똑같아서 둘 다 true
console.log('b == c', b == c);
console.log('b === c', b === c);

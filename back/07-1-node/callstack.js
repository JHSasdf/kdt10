function first() {
    second();
    console.log('first');
}

function second() {
    third();
    console.log('second');
}

function third() {
    console.log('third');
}

first();

// ---------------------------------------------------------------------------------------

function run() {
    console.log('3초 뒤 실행');
}

console.log('시작');
setTimeout(run, 3000); // 콜백함수 run을 background로 보내고 3초 후 태스크 큐로 보냄
console.log('끝');

// ---------------------------------------------------------------------------------------


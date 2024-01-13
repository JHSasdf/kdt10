function print(a:number, b: number, c?: number): void {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
}
function print2(a:number, b: number, c: number = 50): void {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
}

// Error Lens extension에서 프로젝트에서 파일이 동일한 함수 명이 있을 때 띄워주는 것, 그냥 추천하는 것이고 오류가 뜨는 것은 아님.
function print3(...values: string [] ): void {
    // for of문 돌려도 됨.
    for (const value of values) {
     console.log(value);   
    }
}

print(1,2,3);
console.log();
print(1,2);
console.log('print2:');
print2(1,2);
console.log('선');

print3('지','훈');

// 매개변수 없는 함수
function printHello(): void {
    console.log('hello');
}

// void가 아닌 자료형을 반환하는 함수
function sayHello(): string {
    return 'hello!';
}

// console.log(sayHello());

function returnNum(): number {
    return 100 + 100;
}

function sum(a: number, b: number): number {
    return a + b;
}

// 화살표 함수
const sum2 = (a: number, b: number, c:number): number => {
    return a+b+c;
}

// 화살표 함수 생략
const sum3 = (a: number, b: number, c:number): number => a+b+c;

// interface 정의 시 함수 타입 표현
interface Greet {
    name: string;
    hi() : string;
    bye(a: number): string;
}

const dohwa: Greet = {
    name: 'dowha',
    hi() {
        return '여기는' + this.name + '캠퍼스';
    },
    bye(a: number) {
        return `잘가라는 인사를 ${a} 번 했습니다.`;
    }
}

console.log(dohwa.hi()); // 여기는 dohwa 캠퍼스
console.log(dohwa.bye(132)); // 잘가라는 인사를 132번 했습니다.

// never: 함수가 절대 끝나지 않는 경우
function goingOn(): never {
    while (true) {
        console.log('keep going on dude!');
    }
};

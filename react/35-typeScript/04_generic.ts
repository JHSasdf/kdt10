function numArrLen (arr: number[]) :number {
    return arr.length;
}

function strArrLen (arr: string[]) :number {
    return arr.length;
}

// generic
// 선언할 때 타입을 지정하기 어려운 경우 존재
// = 데이터 타입을 외부에서 지정
// = 생성 시점에서 타입을 명시
// => "재사용성 증가"
// => 타입을 변수처럼 사용하는 것
// 형태는 주고 <T>를 사용함 -> 사용시 T는 type만 작성 가능
function genericArrLen<T> (arr: T[]): number {
    return arr.length;
}

function anotherGenericArrLen<T> (arr: Array<T>): number {
    return arr.length;
}

console.log(numArrLen([1,2,3,4]));
console.log(strArrLen(['a', 'b', 'c']));

console.log("genericArrLen number version :", genericArrLen<number>([1,2,3]));
console.log("anotherGenericArrLen number version :", anotherGenericArrLen<number>([1,2,3]));
console.log("anotherGenericArrLen string version :", anotherGenericArrLen<String>(['선', '지', '훈']));

// Error Lens extension에서 프로젝트에서 파일이 달라도 동일한 함수 명이 있을 때 띄워주는 것, 그냥 추천하는 것이고 오류가 뜨는 것은 아님.
function print3<T, U>(arr1: T[], arr2: Array<U>): void {

    console.log(arr1, arr2);
    console.log(typeof arr1, typeof arr2); // js는 object로 다 퉁친다.
};

print3<string, number>(['선', '지', '훈'], [1, 2, 3]);


// interface와 generic
interface Phone<T> {
    company: string,
    createdAt: Date,
    option: T;
}

type iPhoneOption = {
    color: string,
    storage: number,
};

const iPhone13Pro: Phone<iPhoneOption> = {
    company: 'apple',
    createdAt: new Date('2022-10-01'),
    option: {
        color: 'pink',
        storage: 640,
    }
}
console.log('iPhone13Pro is: ',iPhone13Pro);
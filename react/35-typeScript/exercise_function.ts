
function sum1(...values: number[]): void {
    let result: number = 0;
    for (const value of values) {
        result += value;
    }
    console.log('수의 합: ', result);
}

sum1(34,54);
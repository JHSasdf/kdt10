function arrElement<T> (arr: T[], index: number): T | boolean {
    if (arr.length - 1 < index) {
        return false;
    }
    return arr[index];
}

console.log(arrElement<string>(['a', 'b'], 2));
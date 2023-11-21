let btn1 = document.querySelector('button');
let mother = btn1.parentElement;
let btn2 = mother.children[1];
console.log(btn1);
console.log(mother);
console.log(btn2);

function solution(n){
    var answer = 0;
    strN = String(n);
    for (let i = 0; i < strN.length; i++) {
        console.log(parseInt(i));
        answer += parseInt(i);
    }

    return answer;
}

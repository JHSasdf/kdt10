// Promise (프로미스) 객체
/**
 * - 비동기 함수를 동기처리 하기 위해 만든 객체
 * - 미래에 성공/실패에 대한 결과값을 '약속'한다는 의미
 * - 성공, 실패를 분리해서 반환
 * - 성공에 대한 결과는 then이라는 메소드로,
 * - 실패에 대한 결과는 catch라는 메소드로 처리
 * - resolved: 성공,
 * - rejected: 실패
 */

// 1. promise 생성
function promise1(flag) {
  // 프로미스 객체를 생성하여 반환.
  return new Promise(function (resolve, reject) {
    if (flag) {
      resolve(
        `현재 프로미스의 상태는 fulfilled(이행), then메서드로 연결! flag: ${flag}`
      );
    } else {
      reject(
        `현재 프로미스의 상태는 rejected(거절), catch 메서드로 연결! flag: ${flag}`
      );
    }
  });
}

// 프로미스를 사용하는 코드 작성
// promise1(5 < 3).then(function (result) {
//     console.log(result);
// }).catch( function(error) {
//     console.log(error);
// });
// index.js에서 '콜백함수'를 이용해서 동기처리한 코드를
// 'Promise'를 이용해서 동기처리

function goMart() {
  console.log("마트에 와서 어떤 음료를 살지 고민중,..");
}

function pickDrink() {
  return new Promise(function (resolve, reject) {
    //3초 고민(3초 후에 실행)
    setTimeout(function () {
      console.log("고민 끝!");
      product = "콜라";
      price = 1600;
      const money = 1000;

      if (price > money) {
        reject();
      } else {
        resolve(); // 성공을 의미하는 resolve를 실행
      }
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명: ${product}, 가격: ${price}`);
}

let product, price;

// goMart();
// pickDrink().then( function() {
//     pay(product, price);
// }).catch( () => {
//     console.log('돈이 부족하다...')
// });

// ------------------------------------------------------------프로미스 체이닝 ----------------------------
// 함수를 이용해서 (4 + 3) * 2 - 1 을 연산하기

// 1. 콜백함수로 작성
function add(n1, n2, cb) {
  setTimeout(function () {
    const result = n1 + n2;
    cb(result); // mul(result) 실행
  }, 1000);
}

function mul(n, cb) {
  setTimeout(function () {
    const result = n * 2;
    cb(result);
  }, 700);
}

function sub(n, cb) {
  setTimeout(function () {
    const result = n - 1;
    cb(result);
  }, 500);
}

// add(4,3, function(result1) { // result1은 add의 결과값. 81번째 줄에서 result라는 값을 넣었으므로 사용 가능하다.
//     console.log('add result:', result1);
//     mul(result1, function(result2) {
//         console.log('mul result:', result2);
//         sub(result2, function(result3) {
//             console.log('sub result:', result3)
//         })
//     });
// });

function add1(n1, n2) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n1 + n2;
      resolve(result);
    }, 1000);
});
}

function mul1(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2;
            // resolve(result);
            reject('의도적 에러');
    }, 700);
  });
}

function sub1(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const result = n - 1;
      resolve(result);
    }, 500);
  });
}

add1(4,3)
.then(function(result1){
    console.log('add result:', result1);
    return mul1(result1);
}).then(function(result2){
    console.log('mul result:', result2);
    return sub1(result2);
}).then(function (result3) {
    console.log('sub result :', result3);
}).catch(function (error) {
    console.log(error);
})
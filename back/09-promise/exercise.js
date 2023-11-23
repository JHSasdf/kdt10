function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back(txt) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(txt);
      resolve(txt);
    }, 1000);
  });
}

function hell(message) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(message);
    }, 1000);
  });
}
let word;
async function execute() {
  word = await call('kim');
  console.log(word + " 반가워");
  word = await back('back');
  console.log(word + " 를 실행했구나.!");
  word = await hell('HELL');
  console.log('여기는 ', word);
}

execute();

// call("kim")
//   .then(function (name) {
//     console.log(name + " 반가워");
//     return back("back");
//   })
//   .then(function (txt) {
//     console.log(txt + " 을 실행했구나!");
//     return hell("Promise");
//   })
//   .then(function (message) {
//     console.log("여기는 " + message);
//   });

import React, { useState } from "react";

function SayFunction() {
  console.log(useState("welcome")); // ['welcome!', function]
  const [message, setMessage] = useState("welcome"); // 첫번째 배열 (message), 두번째 배열 set함수
  //  message: 메세지 상태
  //  setMessage() : message stage 값을 바꾸는 함수

  function onClickEnter() {
    setMessage('안녕하세요~');
  }
  
  function onClickLeave() {
    setMessage('안녕히 가세요~');
  }
  return (
    <div>
        {/* 
        주의사항 : 괄호 없음!
        - HTML: onclick="onClickEnter()" -> 문자열 형식으로 호출문 등록
        - JS: addEventListener('click', onClickEnter); -> 괄호 없애서 함수 바로 실행하지 않고, 클릭발생할 때 함수 호출
        - React: onClick={onClickEnter} -> JS 동일  */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;

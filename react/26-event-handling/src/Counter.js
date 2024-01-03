import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };

  const alertMsg = (msg) => {
    alert(`${msg} 현재 숫자는 ${number}입니다.`);
  };

  const consoleMsg = (e, msg) => {
    console.log("event.target:", e.target);
    console.log(`${msg} 현재 숫자는 ${number}입니다.`);
  };
/*
*   currentTarget은 이벤트 핸들러가 있는 요소
*   target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치(내가 클릭한 자식 요소가 나옴)
*   currentTarget은 이벤트가 부착된 부모 요소 반환
*
*/
  const handleEvent = (e) => {
    console.log('e.target:', e.target);
    console.log('e.currentTarget:', e.currentTarget);

  };

  return (
    <div>
      <h1>Function Component</h1>
      <h2>{number}</h2>
      {/* 함수에 인자가 없는 경우 */}
      <button onClick={increase}>+1</button>

      {/* 함수에 인자 보내기 : 인자가 있는 함수를 익명함수로 감싸서 처리 */}
      <button onClick={() => alertMsg("안녕하십니까")}>alertMsg</button>
      <button onClick={(e) => consoleMsg(e, "안녕하십니까")}>consoleMSg</button>

      {/* e.target vs e.currentTarget */}
      <button onClick={handleEvent}>
        <span>handleEvent</span>
      </button>
    </div>
  );
}

export default Counter;

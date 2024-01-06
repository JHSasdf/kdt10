import { useMemo, useState } from "react";

// useMemo : 연산의 결과 값을 기억
function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // [before]
  // 임의의 큰 연산을 하는 함수(가정)
  // 버튼을 누를 떄, input을 입력할 때 둘 다 연산이 이루어짐 (calc 함수 호출)
  // input 값이 바뀔 때는 연산 필요 x => useMemo 이용해서 특정 값을 기억하고 그 값이 바뀔 때만 연산되도록 최적화

  //   function calc() {
  //     console.log("열심히 계산중");
  //     for (let i = 0; i <= 3000000000; i++) {}
  //     return count ** 2;
  //   };

  // [after]
  // calc 실행되었을 때 return되는 값이 count와 관련 있기 때문에 의존배열: count
  // 의존배열에 count를 넣어주면, count의 값이 바뀔 때만 calc 함수를 싱행

  // 아래 calc는 useMemo를 이용한 변수이다. 화살표 함수가 아님
  const calc = useMemo(() => {
    console.log("열심히 계산중");
    for (let i = 0; i <= 30000000; i++) {}
    return count ** 2;
  }, [count]);

  return (
    <>
      <h1>UserMemo Ex</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus Count
      </button>
      {/* input 태그에 값 입력시마다 input state값 바뀜 -> 리렌더링 -> 함수 호출 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>count : {count}</p>

      {/* before */}
      {/* <p>calc: {calc()}</p> */}

      {/* after */}
      <p>calc : {calc}</p>
    </>
  );
}

export default UseMemoEx;

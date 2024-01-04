import React, { useState } from "react";
import Select from "./Select";
import Result from "./Result";

function Exercise() {

    // 밑의 state들을 한번에 관리하기 위해서
    // 하나로 묶어줌
    const [data, setData] = useState({
        frult : 'apple', background : 'black', color : 'white', content : 'text'
    });

  return (
    <div>
      {/* setData를 props로 넘겨줌 */}
      <Select setData={setData}> </Select>
      <Result data = {data}></Result>
    </div>
  );
}

export default Exercise;

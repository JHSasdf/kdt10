import React, { useState, useEffect } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';


function LifeCycleFunc() {
    const [number, setNumber] = useState(0);
    const [visible, setVisible] = useState(true);

    function changeNumber() {
        setNumber(number + 1);
    }

    function changeVisible() {
        setVisible(!visible);
    }

    return ( 
        <>
        <hr />
        <h1>함수형 컴포넌트 라이프사이클</h1>
        <button onClick={changeNumber}>Plus</button>
        <button onClick={changeVisible}>ON/OFF</button>
        {visible && <LifeCycleFuncChild number={number}></LifeCycleFuncChild>}
        </>
     );
}

export default LifeCycleFunc;
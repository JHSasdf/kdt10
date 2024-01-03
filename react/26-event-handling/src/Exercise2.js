import React, { useState } from 'react';

function Exercise2() {
    const [sentence, setSentence] = useState("검정색글씨");

    const [classes, setClasses] = useState("");
    function toRed() {
        setSentence('빨간색 글씨');
        setClasses('red');
    }
    
    function toBlue() {
        setSentence('파란색 글씨');
        setClasses('blue');
    }
    return ( 
        <div>
            <h2 className={classes}>{sentence}</h2>
            <button onClick={toRed}>빨간색</button>
            <button onClick={toBlue}>파란색</button>
        </div>
     );
}

export default Exercise2;
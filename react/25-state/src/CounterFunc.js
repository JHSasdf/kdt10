import React, { useState } from "react";

const CounterFunc = () => {
    const [number, setNumber] = useState(0);
    const onClickEnter = () => {
        setNumber(number + 1);
    }

    return (
        <div>
            <h1>CounterFunc {number}</h1>
            <button onClick={function() {
                setNumber(number + 1);
            }}>
                Plus 1
            </button>
            <button onClick={onClickEnter}>
                Plus 1
            </button>
        </div>
    );
}

export default CounterFunc;
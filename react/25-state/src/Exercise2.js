import React, { useState } from 'react';
function Exercise2() {
    const [number, setNumber] = useState(0);

    function increase () {
        setNumber(number+1);
    }

    function decrease () {
        setNumber(number-2);
    }
    return (
        <div>
            <h2>{number}</h2>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
        </div>
    );
}

export default Exercise2;

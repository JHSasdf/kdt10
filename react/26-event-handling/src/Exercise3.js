import React, { useState } from 'react';

function Exercise3() {
    const [btnVal, setBtnVal] = useState(true);
    const [btnText, setBtnText] = useState("사라져라");

    function disappear() {
        setBtnVal(!btnVal);
        if (btnVal) {
            setBtnText('보여라');
        }else {
            setBtnText('사라져라');
        }
    }

    function disappear2() {
        if (btnVal) {
            setBtnText('보여라');
        } else {
            setBtnText('사라져라');
        }
        setBtnVal(!btnVal);
    }


    return (
        <div>
            <button onClick={disappear}>{btnText}</button>
            {btnVal && <h2>안녕하세요</h2>}
        </div>
    );
}

export default Exercise3;
import React, { useState } from 'react';

function Exercise3() {
    const [btnVal, setBtnVal] = useState(true);
    const [btnText, setBtnText] = useState("사라져라");

    // 비동기로 처리하고 async await,  setTimeOut을 써도 React에서 상태 업데이트는 항상 비동기적으로 이루어지며, React는 자체적으로 상태 업데이트를 일괄 처리(batch)합니다.
    // 그래서 set함수를 쓴다고 해도 바뀌었다고 생각하지 말고 나중에 바뀐다고 생각하며 코드를 진행하는 것이 정신 건강에 이롭다.
    // 결과적으로 둘의 결과는 같다.
    // why? if 절에서 btnVal의 값은 setBtnVal(!btnVal);가 일어나기 전의 값이니까.
    // function disappear() {
    //     setBtnVal(!btnVal);
    //     if (btnVal) {
    //         setBtnText('사라져라');
    //     }else {
    //         setBtnText('보여라');
    //     }
    // }

    function disappear() {
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
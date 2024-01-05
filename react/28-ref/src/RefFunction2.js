import { useRef, useState } from "react";


function RefFunction2 () {
    const idRef = useRef(1);
    const [id, setId] = useState(1);

    let a = 1;
    function plusIdRef() {
        idRef.current++;
        a++;
        console.log('idREf:', idRef.current);
        console.log('a:', a)
    }

    function plusIdState() {
        setId(id+1);
    }

    return ( 
        <>
        <p>(함수형 컴포넌트) ref 로컬변수 사용</p>
        <h2>idRef is... {idRef.current}</h2>
        <button onClick={plusIdRef}>plus idRef</button>

        <p>(함수형 컴포넌트) State 사용</p>
        <h2>state is... {id}</h2>
        <button onClick={plusIdState}>plus idRef</button>

        <p>(그냥 변수) 지역변수 a 사용</p>
        <h2>{a}</h2>
        </>
     );
}

export default RefFunction2;
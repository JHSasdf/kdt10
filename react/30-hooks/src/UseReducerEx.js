import { useReducer } from "react";
// useReducer는 useState의 대체로 나왔지만 복잡해질 때만 써야 좋음
// 간단하면 useState이용

const reducer = (prevNumber, action) => {
    // action 안에는 dispatch의 인자 자체가 들어감.
    switch (action.type) {
        case 'INCREMENT':
            return {value: prevNumber.value + 1};
        case 'DECREMENT':
            return {value: prevNumber.value - 1};
        case 'RESET':
            return {value: 0};
        default:
            return;
    }
}
const initNumber = { value: 0 };


function UserReducerEx() {
    
    const [number, dispatch] = useReducer(reducer, initNumber);
    
    const plus = () => {
        dispatch({type: 'INCREMENT'});
    }
    const minus = () => {
        dispatch({type : 'DECREMENT'});
    }
    const reset = () => {
        dispatch({type : 'RESET'});
    }

    return ( <>
    <h1>useReducer hooks test</h1>
    <h2>{number.value}</h2>
    <button onClick={plus}>Plus</button>
    <button onClick={minus}>Minus</button>
    <button onClick={reset}>Reset</button>
    </> );
}

export default UserReducerEx;
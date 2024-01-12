// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 만든 함수
export const plus = () => {
    return ({type: 'counter/PLUS'})
}
export const minus = () => {
    return ({type: 'counter/MINUS'})
}

// 초기값 정의
const initialState = {
    number: 0,
};

// reducer 정의: action을 발생시키는 함수
// 아랫줄 state = 에는 여러 객체가 들어갈 수 있음
// 이렇게
// state = { number: 0, something: 0};
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'counter/PLUS':
            return {number: state.number + 1};
        case 'counter/MINUS':
            return {number: state.number -1};
        default:
            return state;
    }
};

export default counterReducer;

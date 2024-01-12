export const plus = () => ({type: 'PLUS'});
export const minus = () => ({type: 'MINUS'});

const counterReducer = (state = { number: 0 }, action) => {
    switch (action.type) {
        case 'PLUS':
            return {number: state.number +1};
        case 'MINUS':
            return {number: state.number -1};
        case 'RESET':
            return {number: 0};
        default:
            return {number: state.number}
    }
}

export default counterReducer;
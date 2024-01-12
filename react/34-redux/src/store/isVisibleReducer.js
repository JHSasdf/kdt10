
const initialState = {
    boolean: true,
}

const isVisibleReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'isVisible/change': 
        return {boolean: !state.boolean};
        default :
        return {boolean: true};
    }
}

export default isVisibleReducer;
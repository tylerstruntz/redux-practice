import * as actionTypes from '../action';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INC:
            return {
                ...state,
                counter: state.counter + action.value
            }
        
        case actionTypes.DEC:
            return{
                ...state,
                counter: state.counter - action.value
            };

        case actionTypes.DEC_5:
            return {
                ...state,
                counter: state.counter - action.value
            };

        case actionTypes.INC_5:
            return {
                ...state,
                counter: state.counter + action.value
            };

        case actionTypes.ZERO:
            return {
                ...state,
                counter: state.counter = action.value
            };
    }
    return state;
}

export default counterReducer;
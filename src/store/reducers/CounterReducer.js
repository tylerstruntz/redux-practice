import * as actionTypes from '../actions/ActionTypes';
import {updateObject} from '../utility';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INC:
            return updateObject(state, {counter: state.counter + action.value});

        case actionTypes.DEC:
            return updateObject(state, { counter: state.counter - action.value});
        
        case actionTypes.DEC_5:
            return updateObject(state, {counter: state.counter - action.value});

        case actionTypes.INC_5:
            return updateObject(state, { counter: state.counter + action.value});

        case actionTypes.ZERO:
            return updateObject(state, {counter: state.counter = action.value});
    }
    return state;
}

export default counterReducer;
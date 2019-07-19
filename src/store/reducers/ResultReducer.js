import * as actionTypes from '../actions/ActionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: [],
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultId);
    return updateObject(state, {results: updatedArray}); 
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});

        case actionTypes.DELETE:
            return deleteResult(state, action);
    }
    return state;
}

export default resultReducer;
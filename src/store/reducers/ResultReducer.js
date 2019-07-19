import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    results: [],
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})       //concat returns new array which is old array + argurment passes to concat
            };

        case actionTypes.DELETE:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);
            const updatedArray = state.results.filter(result => result.id !== action.resultId);
            return{
            ...state,
                results: updatedArray
            };
    }
    return state;
}

export default resultReducer;
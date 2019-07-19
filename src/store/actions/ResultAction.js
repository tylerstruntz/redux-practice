import * as actionTypes from './ActionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE,
        result: result
    };
}

export const storeResult = (result) => {
    //this is thunk
    return function(dispatch, getState) {
        //this is where we would send fetch request
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }

};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE,
        resultId: id
    };
};
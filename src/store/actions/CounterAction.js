import * as actionTypes from './ActionTypes';

//action creator
export const increment = (value) => {
    return {
        type: actionTypes.INC, 
        value: value
    };
};

export const decrement = (value) => {
    return {
        type: actionTypes.DEC,
        value: value
    };
};

export const incrementFive = (value) => {
    return {
        type: actionTypes.INC_5,
        value: value,
    };
};

export const decrementFive = (value) => {
    return {
        type: actionTypes.DEC_5,
        value: value,
    };
};


export const zero = (value) => {
    return {
        type: actionTypes.ZERO,
        value: value
    };
};

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case 'INCREMENT':
            return {counter: state.counter + action.value};
        

        case 'DECREMENT':
            return{ counter: state.counter - action.value};


        case 'DECREMENT_FIVE':
            return {counter: state.counter - action.value};


        case 'INCREMENT_FIVE':
            return {counter: state.counter + action.value};


        case 'ZERO_OUT':
            return {counter: state.counter = action.value};

        
        default:
            console.log('default case');
            break;
    }
    return state;
}

    // if(action.type === 'INCREMENT') {
    //     return {
    //         counter: state.counter + 1
    //     }
    // }
    // if(action.type === 'DECREMENT') {
    //     return {
    //         counter: state.counter - 1
    //     }
    // }
    // if(action.type === 'DECREMENT_FIVE') {
    //     return {
    //         counter: state.counter - 5
    //     }
    // }
    // if(action.type === 'INCREMENT_FIVE') {
    //     return {
    //         counter: state.counter + 5
    //     }
    // }
    // if(action.type === 'ZERO_OUT') {
    //     return {
    //         counter: state.counter = 0
    //     }
    // }
    // return state;

export default reducer;
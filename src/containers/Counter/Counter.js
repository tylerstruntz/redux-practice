import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
            <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCoutner} />
                <CounterControl label="Add 5" clicked={this.props.onFiveIncrementCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onFiveDecrementCounter}  />
                <CounterControl label="Set to 0" clicked={this.props.setToZero} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter      //counter comes from reducer. this is our global state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT', value: 1}),
        onFiveIncrementCounter: () => dispatch({type: 'INCREMENT_FIVE', value: 1}),
        onDecrementCoutner: () => dispatch({type: 'DECREMENT', value: 5}),
        onFiveDecrementCounter: () => dispatch({type: 'DECREMENT_FIVE', value: 5}),
        setToZero: () => dispatch({type: 'ZERO_OUT', value: 0})
    };
};


//connect is a fucntion that returns a function which takes a component as input. 
//function that returns a higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
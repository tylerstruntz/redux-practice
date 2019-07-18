import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0,
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
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Results</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,      //counter comes from reducer. this is our global state
        storedResults: state.res.results,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INC , value: 1}),
        onFiveIncrementCounter: () => dispatch({type: actionTypes.INC_5, value: 5}),
        onDecrementCoutner: () => dispatch({type: actionTypes.DEC, value: 1}),
        onFiveDecrementCounter: () => dispatch({type: actionTypes.DEC_5, value: 5}),
        setToZero: () => dispatch({type: actionTypes.ZERO, value: 0}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE, resultId: id})
    };
};


//connect is a fucntion that returns a function which takes a component as input. 
//function that returns a higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
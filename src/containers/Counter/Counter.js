import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/ActionTypes';
import * as actionCreators from '../../store/actions/index';
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
        onIncrementCounter: () => dispatch(actionCreators.increment(1)),
        onFiveIncrementCounter: () => dispatch(actionCreators.incrementFive(5)),
        onDecrementCoutner: () => dispatch(actionCreators.decrement(1)),
        onFiveDecrementCounter: () => dispatch(actionCreators.decrementFive(5)),
        setToZero: () => dispatch(actionCreators.zero(0)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    };
};


//connect is a fucntion that returns a function which takes a component as input. 
//function that returns a higher order component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
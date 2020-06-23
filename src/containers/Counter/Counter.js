import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAdditionof5 }  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractionof5}  />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter:()=>dispatch({type:'DECREMENT'}),
        onAdditionof5:()=>dispatch({type:'ADD5'}),
        onSubtractionof5:()=>dispatch({type:'SUBTRACT5'})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
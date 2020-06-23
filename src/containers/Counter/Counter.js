import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actiontypes from '../../store/constants/constants';
class Counter extends Component 
{
    render () {
        return (
        <React.Fragment>
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={ this.props.onAdditionof5 }  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractionof5}  />               
            </div>
            <hr />
            <button onClick={this.props.onStoreResult.bind(this.props.ctr)}>Store Result</button>
            <ul>
                {
                    this.props.StoredResults.map(g=>(
                    <li key={g.id} onClick={this.props.onDeleteResult}>{ g.value}</li>
                    ))};               
            </ul>            
        </React.Fragment>        
        )
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        StoredResults:state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actiontypes.INCREMENT }),
        onDecrementCounter:()=>dispatch({type:actiontypes.DECREMENT}),
        onAdditionof5:()=>dispatch({type:actiontypes.ADD5,payload: {value:5} }),
        onSubtractionof5:()=>dispatch({type:actiontypes.SUBTRACT5,payload: {value:5} }),
        onStoreResult:()=>dispatch({type:actiontypes.STORE_RESULT}),
        onDeleteResult:()=>dispatch({type:actiontypes.DELETERESULT})
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
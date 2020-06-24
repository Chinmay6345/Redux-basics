import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/indexActions';
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
            <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
            <ul>
                {
                    this.props.StoredResults.map(g=>(
                    <li key={g.id} onClick={()=>this.props.onDeleteResult(g.id)}>{ g.value}</li>
                    ))}               
            </ul>            
        </React.Fragment>        
        )
    }
}
const mapStateToProps =(state) => {
    return {
        ctr: state.ctr.counter,
        StoredResults:state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter:()=>dispatch(actions.decrement()),
        onAdditionof5:()=>dispatch(actions.add5(5)),
        onSubtractionof5:()=>dispatch(actions.subtract5(5)),
        onStoreResult:(result)=>dispatch(actions.storeResult(result)),
        onDeleteResult:(id)=>dispatch(actions.deleteResult(id))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
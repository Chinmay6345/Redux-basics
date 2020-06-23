const redux=require('redux');
const Createstore= redux.createStore;

const initialState={
    counter:0
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'INC_COUNTER':
              return {
                  ...state,
                  counter:state.counter+1
              };
        case 'ADD_10':
             return {
                 ...state,
                 counter:state.counter+action.value
             };
    }
    return state;
};
const store=redux.createStore(rootReducer);
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_10',value:10});
console.log(store.getState());

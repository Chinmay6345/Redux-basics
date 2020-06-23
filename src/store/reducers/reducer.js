import * as actiontypes from '../constants/constants';

const initialState = {
    counter: 0,
    results :new Array()
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actiontypes.INCREMENT:
            return {
                ...state,
                counter: state.counter+1
            };
        case actiontypes.DECREMENT:
            return {
                ...state,
                counter: state.counter-1
            };
        case actiontypes.ADD5:
            return {
                ...state,
                counter: state.counter + action.payload.value
            };
        case actiontypes.SUBTRACT5:
            return {
                ...state,
                counter: state.counter-action.payload.value
            };
        case actiontypes.STORE_RESULT:
            return {
                 ...state,
                 results: state.results.concat({id: new Date(), value: state.counter})
            };
        case actiontypes.DELETERESULT:
            const updatedArr= state.results.filter(result=>result.id !==action.id);
            return {
                ...state,
                results: updatedArr
            };
    }
    return state;
};

export default reducer;
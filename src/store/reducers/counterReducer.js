import * as actiontypes from '../constants/constants';
import { updateObject } from '../HelperMethods/Utility';
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actiontypes.INCREMENT:
           return updateObject(state,{counter:state.counter+1})
        case actiontypes.DECREMENT:
            return updateObject(state,{counter:state.counter-1})
        case actiontypes.ADD5:
            return updateObject(state,{counter:state.counter+action.value})
        case actiontypes.SUBTRACT5:
            return updateObject(state,{counter:state.counter-action.value})
    }
    return state;
};

export default reducer;


/**
 * 
 *  switch(action.type) {
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
                counter: state.counter + action.value
            };
        case actiontypes.SUBTRACT5:
            return {
                ...state,
                counter: state.counter-action.value
            };
    }
 */
import * as actiontypes from '../constants/constants';
import { updateObject } from '../HelperMethods/Utility';
const initialState = {
    results :new Array()
}
function deleteResult(state,action) {
    const updatedArr= state.results.filter(result=>result.id !==action.id);
    return updateObject(state,{results: updatedArr});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {      
        case actiontypes.STORE_RESULT:
            return updateObject(state,{results: state.results.concat({id: Math.random() * (352364643 - 45) + 3, value: action.result})});
        case actiontypes.DELETERESULT:
            return deleteResult(state,action);
    }
    return state;
};

export default reducer;


/*
 switch(action.type) {      
        case actiontypes.STORE_RESULT:
            return {
                 ...state,
                 results: state.results.concat({id: Math.random() * (352364643 - 45) + 3, value: action.result})
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
 */
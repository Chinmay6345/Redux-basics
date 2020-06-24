import * as actions from '../constants/constants';


export const increment=()=>{
    return {
        type:actions.INCREMENT
    }
}
export const decrement=()=>{
    return {
        type:actions.DECREMENT
    }
}
export const add5=(value)=>{
    return {
        type: actions.ADD5,
        value:value
    }
}
export const subtract5=(value)=>{
    return {
        type: actions.SUBTRACT5,
        value:value
    }
}
export const storeResult=(result)=>{
    return {
        type: actions.STORE_RESULT,
        result:result
    };
}
export const deleteResult=(id)=>{
    return {
        type: actions.DELETERESULT,
        id:id
    }
}
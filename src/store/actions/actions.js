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
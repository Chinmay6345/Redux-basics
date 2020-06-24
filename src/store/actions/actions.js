import {INCREMENT,DECREMENT,ADD5,SUBTRACT5,STORE_RESULT,DELETERESULT} from '../constants/constants';


export const increment=()=>{
    return {
        type:INCREMENT
    }
}
export const decrement=()=>{
    return {
        type:DECREMENT
    }
}
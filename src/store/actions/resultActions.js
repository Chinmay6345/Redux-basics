import * as actions from '../constants/constants';

export const saveResult=(result)=>{
    return {
        type:actions.STORE_RESULT,
        result:result
    }
}

export const storeResult=(result)=>{
    return dispatch=> {
        setTimeout(()=>{
            dispatch(saveResult(result));
        },2000);
    }
}
export const deleteResult=(id)=>{
    return {
        type: actions.DELETERESULT,
        id:id
    }
}
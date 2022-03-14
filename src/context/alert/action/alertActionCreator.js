
export const setAlertAction=(text,type='info')=>{
    return{
        type:'SET_ALERT',
        payload:{text,type}
    }
}
export const clearAlertAction=(text)=>{
    return{
        type:'CLEAR_ALERT',
        payload:text
    }
}
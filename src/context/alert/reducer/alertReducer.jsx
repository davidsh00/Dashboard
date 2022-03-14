const alertReducer=(state,action)=>{
    switch(action.type){
        case "CLEAR_ALERT":
            return {
                ...state,
                msgs:[...state.msgs.filter(elem=>elem.text!=action.payload)]
            }
        case "SET_ALERT":
           function messages(){
                if(state.msgs.length==0){return [action.payload]}else{
                    let result=false;
                state.msgs.map(msg=>{
                    if (result)return
                    if(msg.text==action.payload.text)result=true
                })
                if(result){
                    return[...state.msgs]
                }else{
                    return[...state.msgs,action.payload]
                }
                    
                }
                
            };
            return{
                ...state,
                msgs:messages()
            }
        default:
            return state
    }
}
export default alertReducer
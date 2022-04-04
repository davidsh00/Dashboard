import actionTypes from './actionType';
export const loginAction = () => {
  return { type: actionTypes.LOGIN};
};
export const logoutAction=()=>{
  return{type:actionTypes.LOGOUT}
}

export const removeItemActoin = (item, cat) => {
    return { type: actionTypes.REMOVE_ITEM, payload:{cat,item} };

};
export const addItemAction=(item,cat)=>{
return{type:actionTypes.ADD_ITEM,payload:{cat,item}}
}

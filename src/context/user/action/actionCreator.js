import actionTypes from "./actionType";
export const loginAction = () => {
  return { type: actionTypes.LOGIN_VALID };
};
export const addSubUserActon = (text) => {
  return {
    type: actionTypes.ADD_SUBUSER,
    payload: text,
  };
};

export const removeItemActoin = (item, cat) => {
    return { type: actionTypes.REMOVE_ITEM, payload:{cat,item} };

};
export const addItemAction=(item,cat)=>{
return{type:actionTypes.ADD_ITEM,payload:{cat,item}}
}

import actionTypes from "./actionTypes";
export const toggleSidebarAction = () => {
  return {
    type: actionTypes.TOGGLE_SIDEBAR,
  };
};
export const setThemColorAction=(color)=>{
  return{
    type:actionTypes.SET_THEM_COLOR,
    payload:color
  }
}
export const setThemModAction=(mode)=>{
  return{
    type:actionTypes.SET_THEM_MODE,
    payload:mode
  }
}
import actionTypes from "./actionTypes";
export const toggleSidebarAction = () => {
  return {
    type: actionTypes.TOGGLE_SIDEBAR,
  };
};
export const setThemAction=(mode,color)=>{
  return{
    type:actionTypes.SET_THEM,
    payload:{mode,color}
  }
}
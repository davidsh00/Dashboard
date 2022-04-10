import actionTypes from "../action/actionTypes";
const utillsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      };
      case actionTypes.SET_THEM:
        
        return{
          ...state,
          them:action.payload
        }
    default:
      return state;
  }
};
export default utillsReducer;

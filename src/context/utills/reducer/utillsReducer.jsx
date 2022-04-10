import actionTypes from "../action/actionTypes";
const utillsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarShow: !state.sidebarShow,
      };
    case actionTypes.SET_THEM_COLOR:
      localStorage.setItem(
        "them",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("them")),
          color: action.payload,
        })
      );
      return {
        ...state,
        them: { ...state.them, color: action.payload },
      };
    case actionTypes.SET_THEM_MODE:
      localStorage.setItem(
        "them",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("them")),
          mode: action.payload,
        })
      );
      return {
        ...state,
        them: { ...state.them, mode: action.payload },
      };
    default:
      return state;
  }
};
export default utillsReducer;

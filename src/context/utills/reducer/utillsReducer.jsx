const utillsReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        sidebarShow:!state.sidebarShow
      };
    default:
      return state;
  }
};
export default utillsReducer;

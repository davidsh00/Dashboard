const alertReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ALERT":
      return {
        ...state,
        msgs: [...state.msgs.filter((elem) => elem.id != action.payload)],
      };
    case "SET_ALERT":
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    default:
      return state;
  }
};
export default alertReducer;

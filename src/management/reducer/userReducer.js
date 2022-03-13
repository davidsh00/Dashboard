import actionTypes from "../action/actionType";

export const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_VALID: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case actionTypes.ADD_SUBUSER: {
      return {
        ...state,
        subUsers: [...state.subUsers, action.payload],
      };
    }

    case actionTypes.REMOVE_ITEM: {
      return {
        ...state,
        [action.payload.cat]: [
          ...state[action.payload.cat].filter(
            (elem) => elem != action.payload.item
          ),
        ],
      };
    }
    case actionTypes.ADD_ITEM: {
      return {
        ...state,
        [action.payload.cat]: [
          ...state[action.payload.cat],
          action.payload.item,
        ],
      };
    }

    default:
      return state;
  }
};

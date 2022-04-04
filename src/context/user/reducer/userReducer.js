import actionTypes from './../action/actionType';

export const userReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        isLogin: true,
      };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isLogin: false,
      };
    }

    case actionTypes.REMOVE_ITEM: {
      return {
        ...state,
        [action.payload.cat]: [
          ...state[action.payload.cat].filter(
            (elem) => elem !== action.payload.item
          ),
        ],
      };
    }
    case actionTypes.ADD_ITEM: {
      return {
        ...state,
        [action.payload.cat]: [
          ...new Set([...state[action.payload.cat], action.payload.item]),
        ],
      };
    }

    default:
      return state;
  }
};

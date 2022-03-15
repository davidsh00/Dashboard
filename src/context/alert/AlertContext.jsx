import { createContext, useReducer, useEffect } from "react";
import alertReducer from "./reducer/alertReducer";
import { clearAlertAction } from "./action/alertActionCreator";
const alertContext = createContext();
export const AlertProvider = ({ children }) => {
  const initialState = {
    msgs: [],
  };
  const [state, dispatch] = useReducer(alertReducer, initialState);
  useEffect(() => {
    if (state.msgs.length) {
      setTimeout(() => {
        dispatch(clearAlertAction(state.msgs[state.msgs.length - 1].text));
      }, 3000);
    }
  }, [state.msgs]);

  return (
    <alertContext.Provider value={{ ...state, dispatch }}>
      {children}
    </alertContext.Provider>
  );
};
export default alertContext;

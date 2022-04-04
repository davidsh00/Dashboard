import { createContext, useReducer } from "react";
import utillsReducer from "./reducer/utillsReducer";
const utillsContext = createContext();
export const UtillsProvider = ({ children }) => {
  const initialState = {
    sidebarShow: false,
  };
  const [state, dispatch] = useReducer(utillsReducer, initialState);

  return (
    <utillsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </utillsContext.Provider>
  );
};
export default utillsContext;

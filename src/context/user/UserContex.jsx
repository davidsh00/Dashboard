import { createContext, useReducer } from "react";
import { userReducer } from "./reducer/userReducer";

const usercontext = createContext();
export function UserProvider({ children }) {
  const initialState={
    isLogin:false,
    subUsers:['ali','mohammad'],
    subDoctors:['Mr.alavi','Mr.akbari']
}
  const [state, dispatch] = useReducer(userReducer,initialState);
  return (
    <usercontext.Provider value={{ ...state, dispatch }}>
      {children}
    </usercontext.Provider>
  );
}

export default usercontext;

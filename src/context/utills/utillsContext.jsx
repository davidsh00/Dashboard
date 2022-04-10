import { createContext, useEffect, useReducer, useState } from "react";
import utillsReducer from "./reducer/utillsReducer";
const utillsContext = createContext();
export const UtillsProvider = ({ children }) => {
  const them = { mode: "light", color: "blue" };
  const initialState = {
    sidebarShow: false,
    them,
  };

  const themColor = {
    sky: "2,132,199",
    red: "220,38,38",
    indigo: "99,102,241",
    green: "34,197,94",
    blue: "37,99,235",
  };

  const [state, dispatch] = useReducer(utillsReducer, initialState);

  const updateThem = ({ mode = "light", color }) => {
    const changeCssVar = (varName, varValue) => {
      document.documentElement.style.setProperty(varName, varValue);
    };
    if (mode === "dark") {
      changeCssVar("--body-bg-clr", "0,0,0");
      changeCssVar("--primary-clr", "255,255,255");
      changeCssVar("--section-bg-clr", "46, 46, 51");
      changeCssVar("--border-clr", "100, 100, 100");
      changeCssVar("--hover-clr", "255,255,255");
    } else {
      changeCssVar("--body-bg-clr", "234,235,235");
      changeCssVar("--primary-clr", "15,23,42");
      changeCssVar("--section-bg-clr", "255,255,255");
      changeCssVar("--border-clr", "51, 65, 85");
      changeCssVar(" --tw-shadow-color", " #000");
      changeCssVar("--hover-clr", "0,0,0");
    }
    changeCssVar("--item-bg-clr", themColor[color]);
    changeCssVar("--header-bg-clr", themColor[color]);
  };

  const checkLocalThem = () => {
    if (!localStorage.getItem("them")) {
      localStorage.setItem("them", JSON.stringify(them));
      console.log("create");
    }
  };
  useEffect(() => {
    checkLocalThem();
    updateThem({ ...JSON.parse(localStorage.getItem("them")) });
  }, [state.them]);

  return (
    <utillsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </utillsContext.Provider>
  );
};
export default utillsContext;

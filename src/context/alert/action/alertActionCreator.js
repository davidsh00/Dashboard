import { v4 } from "uuid";
export const setAlertAction = (text, type = "info") => {
  return {
    type: "SET_ALERT",
    payload: { id: v4(), text, type },
  };
};
export const clearAlertAction = (id) => {
  return {
    type: "CLEAR_ALERT",
    payload: id,
  };
};

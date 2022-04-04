import { createContext, useReducer } from "react";
import { userReducer } from "./reducer/userReducer";
import userProfile from "../../images/user-profile.jpg";
import notifProfile1 from "../../images/notif-profile-1.jpg";
import notifProfile2 from "../../images/notif-profile-2.jpg";
const usercontext = createContext();
export function UserProvider({ children }) {
  const initialState = {
    isLogin: false,
    user: {
      userProfile,
      userNotifs: [
        {
          notifMessage: "hi i want to talk you pls accept me",
          notifProfile: notifProfile1,
          notifNumber: 2,
          isRead: true,
        },
        {
          notifMessage:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quibusdam ea iure error necessitatibus, nihil neque atque consectetur quasi cum libero maiores ex commodi illo cupiditate delectus. Qui accusamus, praesentium quam eveniet veritatis fuga. Qui aliquid placeat hic eveniet repellat?",
          notifProfile: notifProfile2,
          notifNumber: 1,
          isRead: false,
        },
      ],
    },
    subUsers: ["ali", "mohammad"],
    subDoctors: ["Mr.alavi", "Mr.akbari"],
  };
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <usercontext.Provider value={{ ...state, dispatch }}>
      {children}
    </usercontext.Provider>
  );
}

export default usercontext;

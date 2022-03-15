import "./../styles/dashboard.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usercontext from "../context/user/UserContext";
import Header from "./../components/layout/Header";
import SideBar from "./../components/layout/SideBar";
import UserSection from "../components/layout/UserSection";
import alertContext from "../context/alert/AlertContext";
import AlertCode from "../context/alert/action/alertCode";
import { setAlertAction } from "../context/alert/action/alertActionCreator";


function Dashboard() {
  const { isLogin } = useContext(usercontext);
  const { dispatch,sidebarShow } = useContext(alertContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      return navigate("/login");
    } else {
      dispatch(setAlertAction(AlertCode.login, "success"));
    }
  }, [isLogin]);
  return (
    <>
      <SideBar />
      <div className={`dashboard-content ${sidebarShow?'md:pl-[250px]': 'md:pl-[50px]'} `}>
        <Header />
        <UserSection />
      </div>
    </>
  );
}

export default Dashboard;

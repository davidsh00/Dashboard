import "./../styles/dashboard.css";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import usercontext from "../context/user/UserContext";
import Header from "../components/layout/Header";
import SideBar from "../components/layout/SideBar";
import UserSection from "../components/layout/UserSection";
import utillsContext from "../context/utills/utillsContext";

function Dashboard() {
  const { isLogin } = useContext(usercontext);
  const { sidebarShow } = useContext(utillsContext);
  let navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      // return navigate('/login');
    }
  }, [isLogin]);
  return (
    <>
      <SideBar />
      <div
        className={`dashboard-content sm:pl-[50px] ${
          sidebarShow ? "md:pl-[250px]" : ""
        } `}
      >
        <Header />
        <UserSection />
      </div>
    </>
  );
}

export default Dashboard;

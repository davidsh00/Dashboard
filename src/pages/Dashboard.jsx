import "./../styles/dashboard.css";
import { useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import usercontext from "../context/user/UserContex";
import Header from "./../components/layout/Header";
import SideBar from "./../components/layout/SideBar";
import UserSection from "../components/user/UserSection";

function Dashboard() {
  const { isLogin } = useContext(usercontext);
  let navigate = useNavigate();

   useEffect(() => {
     if (!isLogin) {
       return navigate("/login");
     }
   }, [isLogin]);
  return (
    <div className="">
      <SideBar />
      <div className="dashboard-content">
        <Header />
        <UserSection />
      </div>
    </div>
  );
}

export default Dashboard;

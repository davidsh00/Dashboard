import "../styles/dashboard.css";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usercontext from "../context/user/UserContex";
import Header from "./Header";
import SideBar from "./SideBar";
import UserSection from "./UserSection";

function Dashboard() {
  const { isLogin } = useContext(usercontext);
  let navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLogin) {
  //     return navigate("/login");
  //   }
  // }, [isLogin]);
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

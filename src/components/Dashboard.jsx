import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import usercontext from "../context/user/UserContex";
import SubUser from "./SubUser";
import SubDoctors from "./SubDoctors";
import AddItem from "./AddItem";

function Dashboard() {
  const { isLogin, subUsers, doctors } = useContext(usercontext);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      return navigate("/login");
    }
  }, [isLogin]);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="box border p-5 ">
        <AddItem />
        <div className="flex gap-5 flex-col sm:flex-row mt-6">
        <SubUser />
        <SubDoctors />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;

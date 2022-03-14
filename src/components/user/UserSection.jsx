import React from "react";
import "./../../styles/usersection.css";
import SubUsers from "./SubUsers";
import SubDoctors from "./SubDoctors";
import AddItem from "./AddItem";

function UserSection() {
  return (
    <section className="user-section flex flex-col p-4 gap-4 bg-white">
      <div className="user-add  p-4">
        <AddItem />
      </div>
      <div className="user-details flex justify-between gap-4 ">
        <div className=" p-4">
        <SubUsers />

        </div>
        <div className=" p-4">
        <SubDoctors />

        </div>
      </div>
    </section>
  );
}

export default UserSection;

import React from "react";
import "./../../styles/usersection.css";
import UserList from "../user/UserList";
import DoctorList from "../user/DoctorList";
import AddItem from "../user/AddItem";

function UserSection() {
  return (
    <section className="user-section">
      <div className="user-add-wrapper">
        <AddItem />
      </div>
      <div className="user-details ">
        <div className="user-list-wrapper">
          <UserList />
        </div>
        <div className="doctor-list-wrapper">
          <DoctorList />
        </div>
      </div>
    </section>
  );
}

export default UserSection;

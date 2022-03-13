import React from "react";
import '../styles/usersection.css'
import SubUsers from "./SubUsers";
import SubDoctors from "./SubDoctors";
import AddItem from "./AddItem";

function UserSection() {
  return (
    <section className="user-section  bg-white p-2">
      <div className="user-add flex flex-col gap-4">
        <AddItem />

        <div className="user-details flex justify-between">
          <SubUsers />
          <SubDoctors />
        </div>
      </div>
    </section>
  );
}

export default UserSection;

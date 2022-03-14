import React from "react";
import "./../../styles/header.css";
import { FaBell, FaUser, FaCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "../shared/SearchBox";

function Header() {
  return (
    <header>
      <BreadCrumb />
      <SearchBox />
      <HeaderPanel/>
    </header>
  );

  function HeaderPanel() {
    return (
      <div className="header-right flex gap-4 flex-row-reverse items-center">
        <div className="pannel-item">
          <Link to="#">
            <FaBell />
          </Link>
        </div>
        <div className="pannel-item">
          <Link to="#">
            <FaCog />
          </Link>
        </div>
        <div className="pannel-item">
          <Link to="#">
            <FaBars />
          </Link>
        </div>
        <div className="pannel-item">
          <Link to="#" className="flex items-center gap-1 ">
            <FaUser />
            sign in
          </Link>
        </div>
      </div>
    );
  }

function BreadCrumb() {
  return (
    <div className='breadcrumb'>
       <ul className='crumb-address'>
           <li><Link to="/">pages</Link></li>
           <li><Link to="/dashboard">Dashboard</Link></li>
       </ul>
       <div className='crumb-path'>Dashboard</div>
    </div>
  )
}
}

export default Header;

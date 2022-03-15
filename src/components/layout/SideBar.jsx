import "./../../styles/sidebar.css";
import { FaGitkraken, FaSquarespace } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useContext}from 'react'
import alertContext from'./../../context/alert/AlertContext'

function SideBar() {
  const {sidebarShow}=useContext(alertContext)
  return (
    <section className={`sidebar ${sidebarShow?'':'sidebar-small'}`}>
      <div className="sidebar-brand flex items-center justify-center font-bold gap-2  ">
        <FaGitkraken size={30} />
        <span className="sidebar-title"><span className="sidebar_item-title">Material Dashboard</span></span>
        
      </div>
      <div className="sidebar-list ">
        <ul className="sidebar-links">
          <li className="sidebar-item active">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          
        </ul>
        <div className="sidebar-title"><div className="sidebar_item-title">account page</div></div>
        <ul className="sidebar-links">
        <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              <span className="sidebar_item-title">Dashboard</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;

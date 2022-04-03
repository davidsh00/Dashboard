import { useContext, useState } from "react";
import "./../../styles/header.css";
import userProfile from "../../images/user-profile.png";
import userUnknow from "../../images/user-unknow.png";
import { FaBell, FaUser, FaCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "../shared/SearchBox";
import usercontext from "./../../context/user/UserContext";
import { logoutAction } from "../../context/user/action/actionCreator";
import alertContext from "../../context/alert/AlertContext";
import { toggleSidebarAction } from "./../../context/alert/action/alertActionCreator";
import { toast } from "react-toastify";
import Login from "../shared/Login";

function Header() {
  const { isLogin, dispatch } = useContext(usercontext);
  const { dispatch: alertDispatch, sidebarShow } = useContext(alertContext);

  return (
    <header>
      <div className="order-1">
        <HeaderLeft />
      </div>
      <div className="order-3 sm:order-2 w-full sm:w-auto mt-4 sm:my-0">
        <SearchBox />
      </div>
      <div className="order-2 sm:order-3 ">
        <HeaderRight />
      </div>
    </header>
  );

  function HeaderRight() {
    return (
      <div className="header-right">
        <div className="pannel-item">
          <Link to="#">
            <div className="profile-img">
              {isLogin ? (
                <img src={userProfile} alt="user-image" />
              ) : (
                <img src={userUnknow} alt="unknow-user" />
              )}
            </div>
          </Link>
        </div>
        <div className="pannel-item">
          <Link to="#">
            <FaBell />
          </Link>
        </div>
        <div className="pannel-item">
          <PannelLogin />
        </div>
      </div>
    );
  }
  function PannelLogin() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const handleSignOutIn = () => {
      if (isLogin) {
        dispatch(logoutAction());
        toast.info("Logged out");
      } else {
        setShowLoginForm(true);
      }
    };
    if (isLogin) {
      return (
        <Link
          to="/login"
          className="flex items-center gap-1 "
          onClick={handleSignOutIn}
        >
          <FaUser />
          sign out
        </Link>
      );
    } else {
      return (
        <>
          {showLoginForm && <Login />}
          <div
            onClick={handleSignOutIn}
            className="flex items-center gap-1 cursor-pointer"
          >
            <FaUser />
            sign in
          </div>
        </>
      );
    }
  }

  function HeaderLeft() {
    const sideBarToggle = () => {
      alertDispatch(toggleSidebarAction());
    };
    return (
      <div className="header-left">
        <div
          className={`sidebar-black-wrapper select-none bg-black bg-opacity-50 fixed md:hidden top-0 left-0 bottom-0 right-0 cursor-pointer z-[10] ${
            sidebarShow ? "block" : "hidden"
          }`}
          onClick={sideBarToggle}
        ></div>
        <div className="sm:hidden cursor-pointer " onClick={sideBarToggle}>
          <FaBars />
        </div>
        <div className="breadcrumb">
          <ul className="crumb-address">
            <li>
              <Link to="/">pages</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
          <div className="crumb-path">Dashboard</div>
        </div>
      </div>
    );
  }
}

export default Header;

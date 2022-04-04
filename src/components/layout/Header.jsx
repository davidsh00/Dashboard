import { useContext, useState } from "react";
import "./../../styles/header.css";
import userProfileUnknow from "../../images/user-profile-unknow.jpg";
import { FaBell, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "../shared/SearchBox";
import usercontext from "./../../context/user/UserContext";
import { logoutAction } from "../../context/user/action/actionCreator";
import utillsContext from "../../context/utills/utillsContext";
import { toggleSidebarAction } from "../../context/utills/action/utillsActionCreator";
import { toast } from "react-toastify";
import Login from "../shared/Login";

function Header() {
  const {
    isLogin,
    dispatch,
    user: { userProfile, userNotifs },
  } = useContext(usercontext);
  const { dispatch: utillsDispatch, sidebarShow } = useContext(utillsContext);
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
                <img src={userProfile} alt="user-profile" />
              ) : (
                <img src={userProfileUnknow} alt="unknow-user" />
              )}
            </div>
          </Link>
        </div>
        <div className="pannel-item pt-2">
          <Link to="#" className="group relative inline-block">
            <FaBell size={25} />
            <NotifBox />
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
    const closeLoginForm = () => {
      setShowLoginForm(false);
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
          {showLoginForm && (
            <div
              className="login-container bg-black h-screen w-screen fixed flex justify-center items-center bg-opacity-70 top-0 left-0 z-[11]"
              id="loginContainer"
              onClick={(e) => {
                if (e.target.id === "loginContainer") {
                  closeLoginForm();
                }
              }}
            >
              <div className="relative">
                <Login />
                <div
                  className=" absolute top-4 right-4 hover:text-red-500 cursor-pointer z-[10] login-close"
                  onClick={closeLoginForm}
                >
                  <FaTimes />
                </div>
              </div>
            </div>
          )}
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
      utillsDispatch(toggleSidebarAction());
    };
    return (
      <div className="header-left">
        <div
          className={`sidebar-black-wrapper select-none bg-black bg-opacity-50 fixed md:hidden top-0 left-0 bottom-0 right-0 cursor-pointer z-[9] ${
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
  function NotifBox() {
    return (
      <ul className="notif-box">
        {isLogin ? (
          userNotifs.length > 0 ? (
            userNotifs.map(({ notifProfile, notifMessage, notifNumber }, i) => {
              return (
                <li className="notif-item" key={i}>
                  <div className="notif-card">
                    <div className="card-data">
                      <div className="card-img">
                        <img src={notifProfile} alt="profile" />
                      </div>
                      <p className="card-message">{notifMessage}</p>
                    </div>
                    <div className="notif-new_message">{notifNumber}</div>
                  </div>
                </li>
              );
            })
          ) : (
            <li className="notif-item">there is nothing to show</li>
          )
        ) : (
          <li className="notif-item">please Log in first</li>
        )}
      </ul>
    );
  }
}

export default Header;

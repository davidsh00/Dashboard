import { useContext } from "react";
import "./../../styles/header.css";
import { FaBell, FaUser, FaCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBox from "../shared/SearchBox";
import usercontext from "./../../context/user/UserContext";
import { logoutAction } from "../../context/user/action/actionCreator";
import alertContext from "../../context/alert/AlertContext";
import AlertCode from "../../context/alert/action/alertCode";
import { setAlertAction, toggleSidebarAction } from "./../../context/alert/action/alertActionCreator";

function Header() {
  const { isLogin, dispatch } = useContext(usercontext);
  const { dispatch: alertDispatch } = useContext(alertContext);
  return (
    <header>
      <BreadCrumb />
      <SearchBox />
      <HeaderPanel />
    </header>
  );

  function HeaderPanel() {
    const handleToggleSidebar=()=>{
      alertDispatch(toggleSidebarAction())
    }
    return (
      <div className="header-right">
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
        <div className="pannel-item" onClick={handleToggleSidebar}>
          <Link to="">
            <FaBars />
          </Link>
        </div>
        <div className="pannel-item">
          <PannelLogin />
        </div>
      </div>
    );
  }
  function PannelLogin() {
    const handleSignOut = () => {
      dispatch(logoutAction());
      alertDispatch(setAlertAction(AlertCode.logout));
    };
    if (isLogin) {
      return (
        <Link
          to="/login"
          className="flex items-center gap-1 "
          onClick={handleSignOut}
        >
          <FaUser />
          sign out
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="flex items-center gap-1 ">
          <FaUser />
          sign in
        </Link>
      );
    }
  }

  function BreadCrumb() {
    return (
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
    );
  }
}

export default Header;

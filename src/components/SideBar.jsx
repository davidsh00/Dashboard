import "../styles/sidebar.css";
import { FaGitkraken, FaSquarespace } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <section className="sidebar ">
      <div className="sidebar-brand flex items-center justify-center font-bold gap-2  ">
        <FaGitkraken size={30} />
        Material Dashboard
      </div>
      <div className="sidebar-list ">
        <ul className="sidebar-links">
          <li className="sidebar-item active">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="sidebar-title">account page</div>
        <ul className="sidebar-links">
          <li className="sidebar-item">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-item ">
            <Link to="#">
              <FaSquarespace />
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default SideBar;

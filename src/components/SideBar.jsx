import "../styles/sidebar.css";
import { FaGitkraken } from "react-icons/fa";

function SideBar() {
  return (
    <section className="sidebar bg-red-500">
      <div className="sidebar-brand flex items-center font-bold gap-2 bg-red-600 ">
        <FaGitkraken size={30}/>
        Material Dashboard
      </div>
    </section>
  );
}
function SideBarItem({ children }) {
  return <div className="sidebar-item">{children}</div>;
}

export default SideBar;

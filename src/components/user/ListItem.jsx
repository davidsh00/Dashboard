import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import usercontext from "../../context/user/UserContext";
import { removeItemActoin } from "../../context/user/action/actionCreator";
import { toast } from "react-toastify";
function ListItem({ name, cat }) {
  const { dispatch } = useContext(usercontext);
  function handleDeletItem() {
    dispatch(removeItemActoin(name, cat));
    toast.success("item Deleted");
  }
  return (
    <li className="list_item ">
      <div>{name}</div>
      <button onClick={handleDeletItem}>
        <FaTimes />
      </button>
    </li>
  );
}

export default ListItem;

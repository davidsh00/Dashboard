import React from "react";
import { useContext, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import usercontext from "../../context/user/UserContext";
import { removeItemActoin } from "../../context/user/action/actionCreator";
import { toast } from "react-toastify";
import "../../styles/listItemTransition.css";
import { CSSTransition } from "react-transition-group";
function ListItem({ name, cat, refl }) {
  const { dispatch } = useContext(usercontext);
  const nodeRef = useRef(null);

  function handleDeletItem() {
    dispatch(removeItemActoin(name, cat));
    toast.success("item Deleted");
  }
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="fade"
      in={true}
      appear={true}
      enter={true}
      timeout={600}
    >
      <li className="list_item " ref={nodeRef}>
        <div>{name}</div>
        <button onClick={handleDeletItem}>
          <FaTimes />
        </button>
      </li>
    </CSSTransition>
  );
}

export default ListItem;

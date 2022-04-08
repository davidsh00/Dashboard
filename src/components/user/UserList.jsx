import { useContext } from "react";
import usercontext from "../../context/user/UserContext";
import ListItem from "./ListItem";
import './transition.css'
import{TransitionGroup,CSSTransition}from'react-transition-group'

function UserList() {
  const { subUsers } = useContext(usercontext);

  return (
    <>
      <h3>Sub-users:</h3>
      {subUsers.length === 0 ? (
        "there are no users"
      ) : (
        <TransitionGroup>
        <ul>
          {subUsers.map((elem, i) => (
            <CSSTransition  classNames="fade" timeout={600} key={i}>
            <ListItem name={elem}  cat={"subUsers"} />
            </CSSTransition>
          ))}
        </ul>
        </TransitionGroup>
      )}
    </>
  );
}

export default UserList;

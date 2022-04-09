import { useContext } from "react";
import usercontext from "../../context/user/UserContext";
import ListItem from "./ListItem";

function UserList() {
  const { subUsers } = useContext(usercontext);

  return (
    <>
      <h3>Sub-users:</h3>

      {subUsers.length === 0 ? (
        "there are no users"
      ) : (
        <ul>
          {subUsers.map((elem, i) => (
            <ListItem name={elem} cat={"subUsers"} key={i} />
          ))}
        </ul>
      )}
    </>
  );
}

export default UserList;

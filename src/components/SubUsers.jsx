import { useContext } from "react";
import usercontext from "../context/user/UserContex";
import Sub_item from "./Sub_item";

function SubUsers() {
  const { subUsers } = useContext(usercontext);

  return (
    <div className="subuser-box">
      <h3>Sub-users:</h3>
      {subUsers.length == 0 ? (
        "there is no user"
      ) : (
        <ul>
          {subUsers.map((elem, i) => (
            <Sub_item name={elem} key={i} cat={"subUsers"} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SubUsers;

import { useContext } from "react";
import usercontext from "../context/user/UserContex";
import { addSubUserActon } from "../management/action/actionCreator";
import Sub_item from "./Sub_item";

function SubUser() {
  const { subUsers, dispatch } = useContext(usercontext);
  const handleAddsubUser = () => {
    dispatch(addSubUserActon("new "));
  };

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

export default SubUser;

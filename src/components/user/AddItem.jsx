import { useContext, useState } from "react";
import usercontext from "../../context/user/UserContext";
import { addItemAction } from "../../context/user/action/actionCreator";
import alertContext from "../../context/alert/AlertContext";
import { setAlertAction } from "../../context/alert/action/alertActionCreator";
import AlertCode from "../../context/alert/action/alertCode";

function AddItem() {
  const { dispatch } = useContext(usercontext);
  const { dispatch: alertDispatch } = useContext(alertContext);
  const [catType, setCatType] = useState("subUsers");
  const [text, setText] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (text.trim() === "" || text.length === 0) {
      setText("");
      alertDispatch(setAlertAction(AlertCode.itsEmpty, "error"));
      return;
    } else {
      dispatch(addItemAction(text.trim(), catType));
      setText("");
    }
  }
  return (
    <form onSubmit={handleAdd} className="add-item flex justify-between">
      <input
        type="text"
        className="add-input"
        placeholder="write something"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="add-cat flex flex-col ">
        <div>
          <label htmlFor="docCat">Doctors</label>
          <input
            type="radio"
            id="docCat"
            name="cat"
            onChange={() => {
              setCatType("subDoctors");
            }}
            checked={catType === "subDoctors"}
          />
        </div>

        <div>
          <label htmlFor="userCat">Users</label>
          <input
            type="radio"
            id="userCat"
            name="cat"
            onChange={() => {
              setCatType("subUsers");
            }}
            checked={catType === "subUsers"}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
}

export default AddItem;

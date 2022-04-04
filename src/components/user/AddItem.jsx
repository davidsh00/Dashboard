import { useContext, useState } from "react";
import usercontext from "../../context/user/UserContext";
import { addItemAction } from "../../context/user/action/actionCreator";
import { toast } from "react-toastify";

function AddItem() {
  const { dispatch, subUsers, subDoctors } = useContext(usercontext);
  const sub = { subUsers, subDoctors };

  const [catType, setCatType] = useState("subUsers");
  const [text, setText] = useState("");
  function handleAdd(e) {
    e.preventDefault();
    if (text.trim() === "" || text.length === 0) {
      setText("");
      toast.error("Type someThing...");
      return;
    } else if (sub[catType].includes(text.trim())) {
      toast.error("Your item has already been imported");
      setText("");
    } else {
      dispatch(addItemAction(text.trim(), catType));
      toast.success(`Item Added`);
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

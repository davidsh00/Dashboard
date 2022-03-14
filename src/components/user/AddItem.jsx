import {useContext, useState} from "react";
import usercontext from "../../context/user/UserContex";
import { addItemAction } from "../../context/user/action/actionCreator";

function AddItem() {
    const {dispatch}=useContext(usercontext)
    const [catType,setCatType]=useState('subUsers')
    const [text,setText]=useState('')
  function handleAdd(e) {
    e.preventDefault();
    if(text.trim()===''|| text.length===0){setText('');return}else{
    dispatch(addItemAction(text.trim(),catType))
    setText('')
    }

  }
  return (
    <form onSubmit={handleAdd} className="flex justify-between">
      <input type="text" className="border border-black grow" placeholder="write something" value={text} onChange={(e)=>{setText(e.target.value)}} />
      <div className="flex flex-col">
        <div>
          <label htmlFor="docCat">Docors</label>
          <input type="radio" id="docCat" name="cat"  onChange={()=>{setCatType('subDoctors')}} checked={catType=="subDoctors"} />
        </div>

        <div>
          <label htmlFor="userCat">User</label>
          <input type="radio" id="userCat" name="cat"  onChange={()=>{setCatType('subUsers')}} checked={catType=="subUsers"}/>
        </div>
      </div>
      <button type="submit" className="submit-btn">
        Add
      </button>
    </form>
  );
}

export default AddItem;

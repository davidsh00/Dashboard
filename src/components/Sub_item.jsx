import { useContext } from 'react';
import {FaTimes}from 'react-icons/fa'
import usercontext from '../context/user/UserContex';
import { removeItemActoin } from '../management/action/actionCreator';
function Sub_item({ name,cat }) {
  const{dispatch}=useContext(usercontext)
  function handleDeletItem(){
    dispatch(removeItemActoin(name,cat))
  }
  return (
    <li className="flex justify-between items-center min-w-[100px]">
      <div>{name}</div>
      <button onClick={handleDeletItem}><FaTimes/></button>
    </li>
  );
}

export default Sub_item;

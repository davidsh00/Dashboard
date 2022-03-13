import {useContext} from "react";
import usercontext from "../context/user/UserContex";
import {loginAction} from '../management/action/actionCreator'
import {useNavigate} from 'react-router-dom'
import {FaUser}from 'react-icons/fa'

function LoginForm() {
  const navigate=useNavigate()
  const {dispatch} = useContext(usercontext)
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(loginAction())
    navigate('/')
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <h2 className="font-bold  " >INHELEV</h2>
      <p>Welcome, please Login</p>
      <form action="" className="log-form" onSubmit={handleSubmit}>

        <div className="form-input relative">
          <input
            type="email"
            id="usrEmail"
            placeholder="Enter your email address"
            required
          />
          <div className="input-icon">
            <FaUser/>
          </div>
        </div>
        <div className="form-input">
          <input type="password" id="usrPass" required />
        </div>
        <div className="form-submit">
          <button className='submit-btn' type="submit">LogIn</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

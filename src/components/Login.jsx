import { useContext } from "react";
import usercontext from "../context/user/UserContex";
import { loginAction } from "../management/action/actionCreator";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginImage from "../images/login-image.jpg";

function LoginForm() {
  const navigate = useNavigate();
  const { dispatch } = useContext(usercontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction());
    navigate("/dashboard");
  };
  const company_name = "Site";
  return (
    <div className="h-screen w-full flex  ">
      <div className="login-image">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="login-form w-full sm:w-[45%] flex justify-center items-center flex-col h-full">
        <p className="login-title mb-10">{company_name}</p>
        <p className="login-description mb-6">{`welcome to ${company_name}`}</p>
        <LoginForm />
      </div>
    </div>
  );
  function LoginForm() {
    return (
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <div className="input-control">
          <input type="email" id="loginEmail" placeholder=" " required />
          <label htmlFor="loginEmail">Email name</label>
        </div>
        <div className="input-control">
          <input type="password" id="loginPassword" placeholder=" " required />
          <label htmlFor="loginPassword">Password</label>
        </div>
        <div className="text-right">
          <button className="submit-btn">Login</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

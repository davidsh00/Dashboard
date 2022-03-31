import { useContext } from "react";
import usercontext from "./../context/user/UserContext";
import { loginAction } from "./../context/user/action/actionCreator";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import loginImage from "../images/login-image-min.jpg";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const { dispatch } = useContext(usercontext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginAction());
      toast.success("You are LogIn");
      navigate("/dashboard");
    } catch (error) {
      toast.error("login Faild");
      console.log(error);
    }
  };
  const company_name = "Site";
  return (
    <div className="login">
      <div className="login-image">
        <img src={loginImage} alt="login-image" />
      </div>
      <div className="login-form-wrapper">
        <p className="login-title mb-8">{company_name}</p>
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
        <div className="text-right mt-2">
          <button className="btn">login</button>
        </div>
      </form>
    );
  }
}

export default Login;

import { useContext, useState } from "react";
import usercontext from "../../context/user/UserContext";
import { loginAction } from "../../context/user/action/actionCreator";
import { useNavigate } from "react-router-dom";
import "../../styles/login.css";
import { toast } from "react-toastify";
import { FaAtlassian, FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
  return (
    <div className="login-form">
      <div className="login-brand">
        <div className="brand-circle">
          <FaAtlassian size={28} />
        </div>
        <h3 className="brand-title">Dashboard Kit</h3>
      </div>
      <div className="login-description ">
        <h2>Log in to Dashboard Kit</h2>
        <p>Enter your email and password below</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            autoCapitalize="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password:</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              autoCapitalize="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <div
              className="password-visibility"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <button type="submit" className="submit">
          Log In
        </button>
      </form>
      <p className="no-problem">
        Don't have an account?{" "}
        <span className="text-blue-600 font-bold text-sm">No Problem !</span>
      </p>
    </div>
  );
}

export default Login;

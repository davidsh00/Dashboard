import Login from "../components/shared/Login";
import loginBg from "../images/login-bg.jpg";
import "../styles/loginPage.css";
function LoginPage() {
  return (
    <div className="login_page-container">
      <div className="z-[-1] login_page-bg">
        <img src={loginBg} alt="login-background" />
      </div>
      <div className="flex w-full h-full sm:w-auto sm:h-auto">
        <div className="w-0 xl:w-[40vw] transition-all"></div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;

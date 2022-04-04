import Login from '../components/shared/Login';
import loginBg from '../images/login-bg.jpg';
function LoginPage() {
  return (
    <div className='login-container  flex justify-center items-center w-screen    h-screen  overflow-hidden fixed top-0 left-0'>
      <div className='z-[-1] absolute top-0 left-0 h-full w-full grayscale-[60%]'>
        <img src={loginBg} alt='login-background' />
      </div>
      <div className='flex w-full h-full sm:w-auto sm:h-auto'>
        <div className='w-0 xl:w-[40vw] transition-all'></div>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;

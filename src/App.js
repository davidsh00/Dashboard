import { UserProvider } from "./context/user/UserContext";
import {BrowserRouter as Router,Routes,Route, Navigate}from 'react-router-dom'
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Alert from "./components/layout/Alert";
import { AlertProvider } from "./context/alert/AlertContext";

function App() {

  return (
    <div className="App">
      <AlertProvider>
      <Alert/>
      <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard"/>} ></Route>
          <Route path="/login" element={<Login/>}/>
          <Route  path="/dashboard" element={<Dashboard/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </UserProvider>
      </Router>
      </AlertProvider>
    </div>
  );
}

export default App;

import { UserProvider } from "./context/user/UserContex";
import {BrowserRouter as Router,Routes,Route, Navigate}from 'react-router-dom'
import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

function App() {

  return (
    <div className="App">
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
    </div>
  );
}

export default App;

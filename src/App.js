import { UserProvider } from "./context/user/UserContex";
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<LoginForm/>}/>
          <Route  path="/" element={<Dashboard/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
      </UserProvider>
      </Router>
    </div>
  );
}

export default App;

import { UserProvider } from "./context/user/UserContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { AlertProvider } from "./context/alert/AlertContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose="2000" />
      <AlertProvider>
        <Router>
          <UserProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />}></Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </UserProvider>
        </Router>
      </AlertProvider>
    </div>
  );
}

export default App;

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
import { UtillsProvider } from "./context/utills/utillsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Them from "./components/layout/Them";

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose="2000" />
      <UtillsProvider>
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
        <Them/>
      </UtillsProvider>
    </div>
  );
}

export default App;

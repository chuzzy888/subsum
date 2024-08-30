import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDashboard from "./pages/internal-page/user-dashboard";
import Login from "./pages/auth/Login";
import Profile from "./pages/internal-page/Profile";
import Airtime from "./pages/internal-page/Airtime";
import HelpSupport from "./pages/internal-page/HelpSupport";
import TransactionHistory from "./pages/internal-page/TransactionHistory";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/airtime-cash" element={<Airtime />} />
            <Route path="/help-support" element={<HelpSupport />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import Sidebar from "../../components/Dashboard/Sidebar";
import Header from "../../components/Dashboard/Header";
import Profile from "../../components/Dashboard/Profile";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Profile />
      </div>
    </div>
  );
};

export default UserDashboard;

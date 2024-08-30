import Sidebar from "../../components/Dashboard/Sidebar";
import AirtimeCash from "../../components/Dashboard/AirtimeCash";
import AirtimeHeader from "../../components/Dashboard/AirtimeHeader";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AirtimeHeader />
        <AirtimeCash />
      </div>
    </div>
  );
};

export default UserDashboard;

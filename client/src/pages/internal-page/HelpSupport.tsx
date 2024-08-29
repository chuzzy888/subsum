import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import HelpSupportHeader from "../../components/Dashboard/HelpSupportHeader";
import Help from "../../components/Dashboard/Help";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <HelpSupportHeader />
        <Help />
      </div>
    </div>
  );
};

export default UserDashboard;

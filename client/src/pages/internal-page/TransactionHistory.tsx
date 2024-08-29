import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import TransactionHeader from "../../components/Dashboard/TransactionHeader";
import TransactionsTable from "../../components/Dashboard/TransactionsTable";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <TransactionHeader />
        <TransactionsTable />
      </div>
    </div>
  );
};

export default UserDashboard;

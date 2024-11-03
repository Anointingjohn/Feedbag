import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import Navbar from "../Navbar/Navbar";
import UserInformation from "./UserInformation";

export default function UserDashboard() {
  return (
    <div className="flex flex-row justify-between container mx-auto min-h-screen bg-[#F1F1F1]">
      <Sidebar />
      <UserInformation />
    </div>
  );
}

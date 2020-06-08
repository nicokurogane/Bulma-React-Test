import React from "react";
import Navbar from "../navbar/Navbar";
import "./dashboard.scss";

const Dashboard = ({children}) => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div class="columns is-mobile  is-marginless layout">
        <div class="column is-2 menu-zone">
         
        </div>
        <div class="column content-zone">
            {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

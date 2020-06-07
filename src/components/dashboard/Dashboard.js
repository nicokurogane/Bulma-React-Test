import React from "react";
import Navbar from "../navbar/Navbar";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div class="columns is-mobile layout is-marginless">
        <div class="column is-2 is-marginless menu-zone">
         
        </div>
        <div class="column is-10 is-marginless content-zone">
         
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

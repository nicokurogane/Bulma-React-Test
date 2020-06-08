import React from "react";
import PriceCard from "../priceCard/PriceCard";
import "./main-content.scss";

const MainContent = () => {
  return (
    <div className="main-content-container">
      <div></div>
      <div className="columns ">
        <div className="column">
          <PriceCard />
        </div>
        <div className="column">
          <PriceCard />
        </div>
        <div className="column">
          <PriceCard />
        </div>
        <div className="column">
          <PriceCard />
        </div>
      </div>
      <div className="columns"></div>
    </div>
  );
};

export default MainContent;

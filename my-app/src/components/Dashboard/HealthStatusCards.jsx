import React from "react";
import healthData from "../../data/healthData";
import "../../styles/HealthStatusCards.css";

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthData.map((item) => (
        <div key={item.id} className="health-card">
          <div className="icon">{item.icon} {item.label}</div>
          {/* <div className="title">{item.label}</div> */}
          <div className="date">Date: {item.date}</div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${item.statusPercent}%`,
                backgroundColor: item.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;

import React from "react";
import "../../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appt-card">
      <div className="simple-appt-details">
        <div className="simple-appt-title">{title}</div>
        <span >{icon}</span>
      </div>
        <h5>{time}</h5>
    </div>
  );
};

export default SimpleAppointmentCard;

import React from "react";
import "../../styles/SimpleAppointmentCard.css";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appt-card">
      <span className="icon">{icon}</span>
      <div className="details">
        <div className="title">{title}</div>
        <div className="time">{time}</div>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;

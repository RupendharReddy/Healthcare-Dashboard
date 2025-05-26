import React from "react";
import calendarData from "../../data/calendarData";
import appointmentCards from "../../data/calendarAppointments";
import "../../styles/CalendarView.css";
import UpcomingSchedule from "./UpcomingSchedule";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day) => (
          <div key={day.date} className="calendar-cell">
            <div className="date">{day.date}</div>
            {day.slots.map((slot, index) => (
              <div key={index} className="slot">
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        {appointmentCards.map((appt) => (
          <div key={appt.id} className="appt-card">
            <div className="appt-icon">{appt.icon}</div>
            <div className="appt-details">
              <div className="title">{appt.title}</div>
              <div className="time">{appt.time}</div>
            </div>
          </div>
        ))}
      </div>
      <UpcomingSchedule/>
    </div>
  );
};

export default CalendarView;

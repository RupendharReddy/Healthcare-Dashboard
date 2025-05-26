import React from "react";
import calendarData from "../../data/calendarData";
import appointmentCards from "../../data/calendarAppointments";
import "../../styles/CalendarView.css";
import UpcomingSchedule from "./UpcomingSchedule";
import avatar from "../../assets/avatar.png";

const CalendarView = () => {
  return (
    <div className="calendar-view">
        <div className="user-profile">
          <img src={avatar} alt="User Avatar"/>
          <button className="add-btn">＋</button>
        </div><br/>
      <div className="calendar-header">
        <h3>October 2021</h3>
        <h5>◀ ▶</h5>
      </div>

      <div className="calendar-grid">
        {calendarData.map((day) => (
          <div key={day.date} className="calendar-cell" id={day.day}>
            <div className="day">{day.day}</div>
            <div className="date">{day.date}</div>
            {day.slots.map((slot, index) => (
              <div
                key={index}
                className={slot === day.appointmentTiming ? "marked" : "slot"}
              >
                {slot === "" ? <h2 className="dash">➖</h2> : slot}
              </div>
            ))}

          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        {appointmentCards.map((appt) => (
          <div key={appt.id} id={appt.id}>
            <div className="appt-details">
              <div className="title">
                <h3>{appt.title}</h3>
                <>{appt.icon}</>
              </div>
              <h6>{appt.time}</h6>
              <h5>{appt.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <UpcomingSchedule/>
    </div>
  );
};

export default CalendarView;

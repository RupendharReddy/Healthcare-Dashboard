import upcomingData from "../../data/upcomingAppointments";
import SimpleAppointmentCard from "../shared/SimpleAppointmentCard";
import "../../styles/UpcomingSchedule.css";

// Upcoming Schedule Component to display upcoming schedule
const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3 className="section-title">The Upcoming Schedule</h3>

      {upcomingData.map((dayBlock) => (
        <div key={dayBlock.day} className="day-group">
          <h6 className="day-label">{dayBlock.day}</h6>
          <div className="cards-wrapper">
            {dayBlock.appointments.map((appt) => (
              <SimpleAppointmentCard
                key={appt.id}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;

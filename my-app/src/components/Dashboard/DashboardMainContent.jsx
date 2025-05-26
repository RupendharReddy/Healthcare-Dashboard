import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";

import "../../styles/DashboardMainContent.css";
import Header from "../Header/Header";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="overview">
        <div className="overview-left">
          <Header/>
          <div className="overview-header">
            <h2>Dashboard</h2>
            {/* <h5>This Week </h5> */}
            <select style={{backgroundColor:"#fff", border:"none", color:"hsl(242, 53%, 63%)" , fontWeight:"550" ,cursor:"pointer"}} disabled>
              <option>This Week </option>
            </select>
          </div>
          <div className="overview-top">
            <AnatomySection />
            <HealthStatusCards />
          </div>
      <ActivityFeed />
        </div>
        <div className="overview-right">
          <CalendarView />
          {/* <UpcomingSchedule /> */}
        </div>
      </div>

      <div className="overview-bottom">
      </div>

    </div>
  );
};

export default DashboardMainContent;

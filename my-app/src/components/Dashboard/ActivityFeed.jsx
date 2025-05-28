import "../../styles/ActivityFeed.css";

const weekdays = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const barHeights = [50, 80, 40, 65, 90, 60, 30];

// Activity Feed Component to display weekly activity feed
const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="title">Activity</h3>
        <span className="subtext">3 appointments on this week</span>
      </div>
      <div className="bar-chart">
        {weekdays.map((day, idx) => (
          <div key={day} className="bar-column">
            <div
              className="bar"
              style={{ height: `${barHeights[idx]}px` }}
            ></div>
            <span className="label">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

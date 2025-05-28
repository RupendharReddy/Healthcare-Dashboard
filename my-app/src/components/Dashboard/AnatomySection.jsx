import anatomyData from "../../data/anatomyData";
import "../../styles/AnatomySection.css";
import anatomy from "../../assets/anatomy.gif";
// import anatomy from "../../assets/anatomy.png"

// Anatomy Section Component to display anatomy image and markers
const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img
        src={anatomy}
        alt="Anatomical human illustration"
        className="anatomy-image"
      />
      {anatomyData.map((marker) => (
        <div
          key={marker.id}
          className={`marker ${marker.status.toLowerCase()}`}
          id={`marker-${marker.id}`}
          style={{ top: marker.top, left: marker.left }}
        >
          {marker.icon && <span className="marker-icon">{marker.icon}</span>}
          {marker.label}
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;

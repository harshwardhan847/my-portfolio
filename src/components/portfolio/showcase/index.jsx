import React from "react";
import "./style.scss";
import Arrow from "../../shared/arrow";
const Showcase = ({ data, transition }) => {
  return (
    <div className="projects-showcase">
      {data.map((projects) => {
        return (
          <div
            key={projects.name}
            className={`showcase-item ${
              transition === "zoomOut"
                ? "zoomOut"
                : transition === "zoomIn"
                ? "zoomIn"
                : ""
            }`}
          >
            <div className="meta-content">
              <h3>{projects.name}</h3>
              <div className="go-to-cta">
                <span className="text">Project Details</span>
                <Arrow />
              </div>
            </div>
            <img src={projects.media.thumbnail} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Showcase;

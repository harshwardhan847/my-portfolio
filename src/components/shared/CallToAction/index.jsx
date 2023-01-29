import React from "react";
import Arrow from "../arrow";
import "./style.scss";

const CallToAction = ({ text, icon, action }) => {
  return (
    <div className="call-to-action">
      <span className="text">{text}</span>
      {icon?<div className="icon">{icon}</div>:<Arrow/>}
    </div>
  );
};

export default CallToAction;

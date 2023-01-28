import React from "react";
import "./style.scss";
import logo from "../../../images/logo.png";
import CallToAction from '../../shared/CallToAction'
const Navigation = () => {
  return (
    <nav className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="Harsh Wardhan" />
      </div>
      <div className="navigation">
        <span className="navigation-item">Skills</span>
        <span className="navigation-item">Portfolio</span>
        <span className="navigation-item">Blogs & Articles</span>
        <CallToAction text='Contact Me'/>
      </div>
    </nav>
  );
};

export default Navigation;

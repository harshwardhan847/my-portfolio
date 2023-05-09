import React, { useState } from "react";
import "./style.scss";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import scrollToSection from "../../utils/helper.js";
const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };
  return (
    <nav className="top-navigation-bar">
      <div className="app-logo">
        <img src={logo} alt="Harsh Wardhan" />
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="fff" />
        ) : (
          <CgMenuRight size={24} color="fff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("blogs")}
        >
          Blogs & Articles
        </span>
        <CallToAction
          text="Contact Me"
          action={() => menuItemClickHandler("contact")}
        />
      </div>
    </nav>
  );
};

export default Navigation;

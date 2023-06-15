import React from "react";
import "./style.scss";
import {
  FaYoutube,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import scrollToSection from '../utils/helper';
import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
const Footer = () => {
  return (
    <Section background="dark" className="footer">
      <div className="footer-content-wrapper">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="footer-menu-items">
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("blogs")}
          >
            Blog & Articles
          </li>
          <li
            className="footer-menu-item"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </li>
        </ul>
        <div className="social-icons">
            <SocialIcon color={'#ff0000'} icon={<FaYoutube/>}link='https://www.youtube.com/@codewithharsh936'/>
            <SocialIcon color={'#0A66C2'} icon={<FaLinkedinIn/>}link='https://www.linkedin.com/in/harsh-wardhan-58816b247/'/>
            <SocialIcon color={'#0D2636'} icon={<FaGithub/>}link='https://github.com/harshwardhan847'/>
            <SocialIcon color={'#E84C88'} icon={<FaInstagram/>}link='https://www.instagram.com/harsh_wardhan847/'/>
            <SocialIcon color={'#1d9bf0'} icon={<FaTwitter/>}link='https://twitter.com/HarshWa44754737'/>
        </div>
        <div className="bottom-bar">
            <div className="copyright-text">
                Copyright 2023 Harsh Wardhan | All Rights Reserved
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;

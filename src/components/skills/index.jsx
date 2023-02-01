import React from "react";
import "./style.scss";
import CallToAction from "../shared/CallToAction";
import techImg from "../../images/tech-icons.png";
import Section from "../shared/section";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Skills = () => {
  return (
    <Section background="dark" id="skills">
      <div className="skills-content-wrapper">
        <div className="left-col">
          <img src={techImg} alt="" />
        </div>
        <div className="right-col">
          <h2>Skills</h2>
          <ul>
            <li>Strong programming skills in C, Java, and JavaScript</li>
            <li>
              Experienced in web development using HTML, CSS, SCSS, Bootstrap,
              React.js, and Node.js/Express.js
            </li>
            <li>
              Proficient in designing and prototyping with Figma and Photoshop
            </li>
            <li>Hands-on experience in building Android apps</li>
            <li>Familiarity with version control using Git and GitHub</li>
          </ul>
          <p>
            "I am constantly looking to expand my skill set and stay up-to-date
            with the latest technologies and industry trends. I am a quick
            learner and always eager to take on new challenges to improve my
            abilities."
          </p>
          <CallToAction text="Download CV" icon={<AiOutlineCloudDownload />} />
        </div>
      </div>
    </Section>
  );
};

export default Skills;

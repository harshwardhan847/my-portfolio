import React, { useState } from "react";
import "./style.scss";
import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
const projectsData = [
  {
    id: 1,
    name: "Calculator",
    tags: ["mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-7.png"),
    },
  },
  {
    id: 2,
    name: "Tic-Tac-Toe",
    tags: ["mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-2.png"),
    },
  },
  {
    id: 3,
    name: "Weather App",
    tags: ["mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-8.png"),
    },
  },
  {
    id: 4,
    name: "Website Design",
    tags: ["web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-1.png"),
    },
  },
  {
    id: 5,
    name: "Web Calculator",
    tags: ["web-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-6.png"),
    },
  },
  {
    id: 6,
    name: "OP Trendy",
    tags: ["product", "web-app", "mobile-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-4.png"),
    },
  },
  {
    id: 7,
    name: "Digital Creative Agency",
    tags: ["web-app"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-3.jpg"),
    },
  },
  {
    id: 8,
    name: "Virtual Reality Experience",
    tags: ["web-app", "mobile-app", "web-page"],
    media: {
      thumbnail: require("../../images/portfolio/thumb-5.jpg"),
    },
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(projectsData);
  const [transition, setTransition] = useState(false);
  const filterProjects = (tag) => {
    setTransition("zoomOut");
    setTimeout(() => {
      if (tag !== "all") {
        const filteredProjects = projectsData.filter((f) =>
          f.tags.includes(tag)
        );
        setProjects(filteredProjects);
      } else {
        setProjects(projectsData);
      }
      setTransition("zoomIn");
    }, 200);
    setTimeout(() => {
      setTransition(false);
    });
  };
  return (
    <Section id="portfolio" title="Check My Portfolio" background="light">
      <div className="portfolio-content-wrapper">
        <Filters filterProjects={(tag) => filterProjects(tag)} />
        <Showcase data={projects} transition={transition} />
      </div>
    </Section>
  );
};

export default Portfolio;

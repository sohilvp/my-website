import React, { useState } from "react";
import "./projects.css";
import { proDta } from "./projectData";

const Projects = ({ width }) => {
  const [proData] = useState(proDta);
  const [selected, setSelected] = useState(1);

  const handleMouseEnter = (id) => {
    setSelected(id);
  };
  const handleMouseLeave = () => {
    setSelected(1);
  };

  return (
    <div className="projectContainer" id="projects">
      {!width ? (
        <>
          <div className="leftContainer">
            {selected !== null && (
              <video
                src={proData.find((x) => x.id === selected)?.video}
                alt="Selected Project"
                muted
                autoPlay
                loop
              />
            )}
          </div>
          <div className="rightContainer">
            <h1>
              <span className="colour">W</span>orks
            </h1>
            {proData.map((x) => (
              <a
                href={x.link}
                target="_blank"
                key={x.id}
                onMouseEnter={() => handleMouseEnter(x.id)}
                onMouseLeave={handleMouseLeave}
              >
                {x.title}
              </a>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="mobileContainer">
            <h1>
              <span className="colour">W</span>orks
            </h1>
            {proData.map((x) => (
              <div key={x.id} className="singleProject">
                <img src={x.image} alt="projectdemo" />
                <h3 className="textToggle">{x.title}</h3>
                <h4 className="textToggle">{x.description}</h4>
                <a className="firstLink" href={x.repo} target="_blank">
                  GitHub
                </a>
                <a className="secondLink" href={x.link} target="_blank">
                  Live site
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;

import React from "react";

import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 details">
            <h1 className="name">Education</h1>
            <p className="intro">
              I have completed my BCA in Mohamed Sathak College of Art's and
              Science
            </p>
            <h1 className="name">Internship & Experience</h1>
            <p className="intro">
              I have 11 months of experience in Frontend Development
            </p>
          </div>
          <div className="col-sm-6 col-md-6">
            <h1 className="name skills">Skills</h1>
            <div className="tech charts">
              <FaHtml5 style={{ color: "red" }} />
              <MdCss style={{ color: "blue" }} />
              <SiJavascript style={{ color: "yellow" }} />
              <FaBootstrap style={{ color: "purple" }} />
              <FaReact style={{ color: "blue" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

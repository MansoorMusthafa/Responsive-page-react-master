import React from "react";

const Project = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 details">
            <h1 className="name">Projects</h1>
            <p className="intro">
              * In my projects I have done a responsive static Dashborad
            </p>
            <p className="intro">
              * Currently Im working in a website called{" "}
              <span className="link" style={{ color: "rgb(9 190 240)" }}>
                berighthere.com
              </span>
            </p>
            <p className="intro">
              * Here is my project dashboard link which I'm hosting in netlify
              <a
                className=""
                style={{
                  textDecoration: "none",
                  marginLeft: "10px",
                  color: "rgb(9 190 240)",
                }}
                href="https://fitpeoassignmenttask.netlify.app/"
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

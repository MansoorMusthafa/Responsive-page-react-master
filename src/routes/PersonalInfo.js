import React from "react";
import heroLogo from "../assets/hero/heroImage.png";
import { FaPhoneAlt } from "react-icons/fa";

function PersonalInfo() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-8 details">
            <h1 className="name">Hi, I'm Mansoor Musthafa</h1>
            <p className="intro">
              I'm a Frontend developer with 11 months of experience using React,
              Reach out if you'd like to learn more!
            </p>{" "}
            <button className="btn">
              {" "}
              <FaPhoneAlt />
              6385126545
            </button>
          </div>
          <div className="col-sm-2 col-md-2">

            <img alt="logo" className="heroImg" src={heroLogo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;

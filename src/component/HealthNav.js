import React from "react";
// import  from "./styles/HealthNavStyle.css";
import "./HealtNavStyle.css";
import logoImg from "../assets/images/logo.png";
function HealthNav() {
  return (
    <div className="main">
      <div className="navContainer">
        <img src={logoImg} alt="logo" className="logoImg"></img>
        <p className="paraLogo">CareForce</p>
        <div className="navMenu">
          <a className="item">Home</a>
          <a className="item">Services</a>
          <a className="item">Who we Serve</a>
          <a className="item">Resources</a>
          <a className="item">About us</a>
        </div>
        <button className="btnLogin">ContactUs</button>
      </div>
    </div>
  );
}

export default HealthNav;

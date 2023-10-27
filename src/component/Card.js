import React from "react";
import "./CardStyle.css";
import cardImg from "../assets/images/cardimg.jpg";
import cardImg1 from "../assets/images/cardimg2.png";

function Card() {
  return (
    <>
      <div className="cardContainer">
        <div className="cardItem">
          <img src={cardImg} alt="card" className="cardimg"></img>
        </div>
        <div className="cardItem cardText">
          <div className="cardTextop">
            <h3>4000+</h3>
            <p>customers across all segments of the healthcare</p>
          </div>
          <div className="cardTextbottom">
            <h3>45+</h3>
            <p>Different Healthcare specialities are supported </p>
          </div>
        </div>
        <div className="cardItem">
          <img src={cardImg1} alt="card" className="cardimg cardimg1"></img>
        </div>
      </div>
      {/* //make another card */}
      <div className="cardContainer-bottom">
        <div className="bottom-left">
          <h1>HealthCare delivery has grown increasingly complex</h1>
        </div>
        <div className="bottom-right">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum
          <div className="list">
            <ul>
              <li>Hospital</li>
              <li>MentalHealthService</li>
              <li>DigitalHealthCare</li>
              <li>Child Care</li>
              <li>DentalChains</li>
              <li>40+healthcare specialities</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

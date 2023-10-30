import React from "react";
import "./CardStyle.css";
import cardImg from "../assets/images/cardimg.jpg";
import cardImg1 from "../assets/images/cardimg2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
            <div className="list-left">
              <FontAwesomeIcon icon={faCheck} className="icon-check" />

              <span>
                Hospitals</span>
              <div><FontAwesomeIcon icon={faCheck} className="icon-check" />Digital Health Care</div>
              <div><FontAwesomeIcon icon={faCheck} className="icon-check" />Dentals Chains</div>
            </div>
            <div className="list-right">
              <div><FontAwesomeIcon icon={faCheck} className="icon-check" />Mental Health Service</div>
              <div><FontAwesomeIcon icon={faCheck} className="icon-check" />Child Care</div>
              <div><FontAwesomeIcon icon={faCheck} className="icon-check" />40+ health care speciality</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

import React from "react";
import "./DisplayStyle.css";

function Display() {
  return (
    <div className="container">
      <h1 className="displayHeading">Where innovation Meets</h1>
      <h1 className="displayHeading">HealthCare Staffing</h1>
      <p className="displayPara">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout the point of using
        Lorem Ipsum. is tha
        {/*it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. */}
      </p>
      <div className="displayBtn">
        <button className="btnSchdule">
          <h4>SchduleNow</h4>
        </button>
        <button className="btnGet">
          <h4>Get In Touch</h4>
        </button>
      </div>
    </div>
  );
}

export default Display;

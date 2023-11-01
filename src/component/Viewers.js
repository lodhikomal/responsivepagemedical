import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ViewersStyle.css";

function Viewers(props) {
    const { iconUrl, heading, paragraph } = props;
    return (
        <div className="viewers-container">
            <div className="viewers-card">
                <FontAwesomeIcon icon={iconUrl} className="icon" />
                <div className="viewers-heading">
                    <h3 className="heading">{heading}</h3>
                </div>
                <div className="viewers-para">{paragraph}</div>
            </div>
        </div>

    );
}

export default Viewers;

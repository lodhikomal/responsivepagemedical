import React from 'react'
import "./adressStyle.css";
import adressImage from "../assets/images/adressImg.webp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
function Adress() {
    return (
        <div className='adress-container'>
            <div className='adress-center'>

                {/* <div className='img-container'> */}
                <div className='img-container'>

                    <img src={adressImage} alt="" className='adrImg'></img>
                </div>
                {/* </div> */}
                <div className="adress-card">
                    <div className='adress-card-main'>

                        <FontAwesomeIcon icon={faCalendar} className="icon" />
                        <div className="adr-heading">
                            <h3>Schduling</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </p>
                        </div>
                    </div>

                    <div className='adress-card-below'>
                        <span>Messaging</span>
                        <span>Refral Managment System</span>
                        <span>Analytic & Insight</span>
                        <span>Credentailing</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Adress

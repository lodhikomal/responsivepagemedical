import React from "react";
import Viewers from "./Viewers";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import "./ViewersStyle.css";
const ViewersData = [
  {
    iconUrl: faNoteSticky,
    heading: "CompilanceMadeSimple",
    paragraph:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical",
  },
  {
    iconUrl: faClock,
    heading: "Increased Efficiency",
    paragraph:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical",
  },
  {
    iconUrl: faAddressCard,
    heading: "Accurate Staffing Levels",
    paragraph:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical",
  },
  {
    iconUrl: faWallet,
    heading: "Reduced payroll",
    paragraph:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical",
  },
];

function ResuableComponnet() {
  return (
    <div className="parent-container">
      {ViewersData.map((data) => {
        return (
          <Viewers
            iconUrl={data.iconUrl}
            heading={data.heading}
            paragraph={data.paragraph}
          />
        );
      })}
    </div>
  );
}

export default ResuableComponnet;

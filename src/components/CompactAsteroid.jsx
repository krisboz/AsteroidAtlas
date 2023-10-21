import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import "../styles/CompactAsteroid.scss";

const CompactAsteroid = ({ name, speed, date, hazard }) => {
  const falseIcon = (
    <span className="false-icon">
      <AiFillCloseCircle />
    </span>
  );

  const trueIcon = (
    <span className="true-icon">
      <AiFillCheckCircle />
    </span>
  );
  return (
    <article className="compact-asteroid">
      <div className="left">
        <h3>{name}</h3>
        <p>
          <BsSpeedometer2 /> {speed} km/h
        </p>
      </div>
      <div className="right">
        <p className="date">{date}</p>
        <div className="hazard-container">
          <p>Hazardous</p>
          {hazard}
        </div>
      </div>
    </article>
  );
};

export default CompactAsteroid;

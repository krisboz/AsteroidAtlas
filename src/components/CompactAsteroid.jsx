import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/CompactAsteroid.scss";

const CompactAsteroid = ({ name, speed, date, hazard, id }) => {
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
    <article className="compact-asteroid" id={id}>
      <div className="date-container">
        <p className="date">{date}</p>
      </div>
      <div className="asteroid-data">
        <h3>{name}</h3>
        <p>
          <BsSpeedometer2 /> {speed} km/h
        </p>
        <p className={hazard ? "is-hazard" : "is-safe"}>
          {hazard ? "Hazardous" : "Safe"} for Earth
        </p>
      </div>
      <div className="btn-container">
        <Link to={`/asteroid/${id}`} className="cta-button">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default CompactAsteroid;

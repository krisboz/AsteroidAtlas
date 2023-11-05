import React from "react";
import { BsSpeedometer2 } from "react-icons/bs";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { MdCallMissed } from "react-icons/md";
import CountUp from "react-countup";
import parseDiameterForDisplay from "../helpers/parseDiameterForDisplay";

import { Link } from "react-router-dom";
import "../styles/components/CompactAsteroid.scss";

const CompactAsteroid = ({
  name,
  speed,
  date,
  hazard,
  id,
  missDistance,
  diameter,
}) => {
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
          <BsSpeedometer2 />{" "}
          <CountUp end={speed} delay={0} suffix=" km/h" duration={2} />
        </p>

        <p>
          <MdCallMissed />{" "}
          <CountUp end={missDistance} delay={0} suffix=" km" duration={2} />
        </p>
        <p>
          ⌀{" "}
          <CountUp
            end={parseDiameterForDisplay(diameter).val}
            delay={0}
            suffix={parseDiameterForDisplay(diameter).unit}
            duration={2}
          />
        </p>
        <p className={hazard ? "is-hazard" : "is-safe"}>
          {hazard ? "Hazardous" : "Safe"} for Earth
        </p>
      </div>
      <div className="btn-container">
        <Link to={`/asteroid/${id}/${date}`} className="cta-button">
          View Details
        </Link>
      </div>
    </article>
  );
};

export default CompactAsteroid;

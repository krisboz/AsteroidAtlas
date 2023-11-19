import React from "react";
import getAsteroidPropertyDescription from "../helpers/getAsteroidPropDescription";
import parsePropertyName from "../helpers/parsePropertyName";
import "../styles/components/OrbitalData.scss";
import Collapsible from "react-collapsible";

/**
 * 
 *   ORBITAL DATA :
        first_observed
        observations_used
        description
        period
        aphelion
        perihelion 
        jupiter_tisserand_invariant
        inclination
        eccentricity
        mean_motion
        semi_major_axis:
        ascending_node_longitude:
  
 */
const OrbitalData = ({ data }) => {
  return (
    <section className="orbital-data">
      <h2>Orbital Data</h2>
      <article className="orbit-basic-data">
        <div className="description-container">
          <p>{data.description}</p>
        </div>

        <div className="basic-data-container">
          <p>First observed: {data.first_observed}</p>
          <p>Orbit Type: {data.type}</p>
          <p>Observations: {data.observations_used}</p>
          <p>Orbit duration: {Math.round(data.period)} days</p>
        </div>
      </article>
      <article className="nerd-data">
        <div className="nameplate">
          <h3>Detailed Orbital Data</h3>
          <p>click on any of the properties to find out more</p>
        </div>

        <div className="properties">
          {Object.entries(data.for_nerds).map((el, i) => {
            return (
              <Collapsible
                trigger={[
                  `${parsePropertyName(el[0])}: `,
                  <span className="collapsible-test">{el[1].toFixed(2)}</span>,
                ]}
                key={i}
              >
                <p className="coll-desc">
                  Full Value:<span className="collapsible-test"> {el[1]}</span>{" "}
                  <br></br>
                  {getAsteroidPropertyDescription(el[0])}
                </p>
              </Collapsible>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default OrbitalData;

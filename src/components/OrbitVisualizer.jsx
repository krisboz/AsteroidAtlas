import React from "react";
import OrbitCanvas from "./OrbitCanvas";

const OrbitVisualizer = ({ data }) => {
  //data neccessities
  /**
   * mean_motion
   * epoch
   * eccentricity
   * semi-major-axis
   *
   */

  //1.Calculate Mean Anomaly
  const mean_anomaly = data.mean_motion * data.epoch;
  //2 Solve Keplers Equation
  const solveKeplersEquation = (mean_anomaly, eccentricity) => {
    let E = mean_anomaly;
    const maxIterations = 150;
    const tolerance = 1e-12;
    for (let i = 0; i < maxIterations; i++) {
      const nextE =
        E -
        (E - eccentricity * Math.sin(E) - mean_anomaly) /
          (1 - eccentricity * Math.cos(E));

      if (Math.abs(nextE - E) < tolerance) {
        return nextE;
      }
      E = nextE;
    }
    return E;
  };
  //3. Calculate True Anomaly
  const calcTrueAnomaly = (eccentricity) => {
    const v =
      2 *
      Math.atan(
        Math.sqrt((1 + eccentricity) / (1 - eccentricity)) *
          Math.tan(solveKeplersEquation(mean_anomaly, data.eccentricity) / 2)
      );

    // Convert the angle from radians to degrees if needed
    // const νDegrees = ν * (180 / Math.PI);
    return v;
  };

  //4. calculate radius vector
  const calcRadiusVector = () => {
    const r =
      data.semi_major_axis *
      (1 -
        data.eccentricity *
          Math.cos(solveKeplersEquation(mean_anomaly, data.eccentricity)));

    return r;
  };

  const TRUE_ANOMALY = calcTrueAnomaly(data.eccentricity);
  const RADIUS_VECTOR = calcRadiusVector();

  const convertPolarToCartesian = () => {
    const x = RADIUS_VECTOR * Math.cos(TRUE_ANOMALY);
    const y = RADIUS_VECTOR * Math.sin(TRUE_ANOMALY);
    return { x, y };
  };

  const coords = convertPolarToCartesian();

  return (
    <article className="orbit-visualizer">
      <OrbitCanvas x={coords.x} y={coords.y} />
    </article>
  );
};

export default OrbitVisualizer;

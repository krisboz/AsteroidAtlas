const calcOrbitPoints = (data) => {
  // 1. Calculate Mean Anomaly
  const mean_anomaly = data.mean_motion * data.epoch;

  // 2. Solve Kepler's Equation
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

  // 3. Calculate True Anomaly
  const calcTrueAnomaly = (eccentricity) => {
    const E = solveKeplersEquation(mean_anomaly, data.eccentricity);
    const v =
      2 *
      Math.atan(
        Math.sqrt((1 + eccentricity) / (1 - eccentricity)) * Math.tan(E / 2)
      );
    return v;
  };

  // 4. Calculate Radius Vector
  const calcRadiusVector = () => {
    const E = solveKeplersEquation(mean_anomaly, data.eccentricity);
    const r = data.semi_major_axis * (1 - data.eccentricity * Math.cos(E));
    return r;
  };

  // Calculate True Anomaly and Radius Vector
  const TRUE_ANOMALY = calcTrueAnomaly(data.eccentricity);
  const RADIUS_VECTOR = calcRadiusVector();

  // Convert Polar to Cartesian Coordinates
  const convertPolarToCartesian = () => {
    const x = RADIUS_VECTOR * Math.cos(TRUE_ANOMALY);
    const y = RADIUS_VECTOR * Math.sin(TRUE_ANOMALY);
    return { x, y };
  };

  const coords = convertPolarToCartesian();
  return coords;
};

export default calcOrbitPoints;

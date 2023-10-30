import React from "react";

const getOrbitDataArray = (allData) => {
  const RESOLUTION = 100;
  const measurements = allData.close_approach_data;
  // Check if there are enough measurements to distribute evenly
  if (measurements.length <= RESOLUTION) {
    return measurements;
  }

  // Calculate the step size to evenly distribute the points
  const step = Math.floor(measurements.length / RESOLUTION);

  // Initialize an array to store the evenly distributed points
  const evenlyDistributedPoints = [];

  for (let i = 0; i < RESOLUTION; i++) {
    const index = i * step;
    evenlyDistributedPoints.push(measurements[index]);
  }

  console.log(allData);
};

export default getOrbitDataArray;

const calcKineticEnergy = (asteroidDiameter, relativeSpeedKmPerHour) => {
  const density = 2.71; // g/cm^3 (mean density for S class asteroids)
  // Step 1
  const radius = asteroidDiameter / 2;

  // Step 2
  const relativeSpeedMetersPerSecond = (relativeSpeedKmPerHour * 1000) / 3600;

  // Step 3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  const mass = volume * density * 1e-6; // Convert mass to kilograms
  const kineticEnergy = 0.5 * mass * Math.pow(relativeSpeedMetersPerSecond, 2);

  return kineticEnergy;
};

export default calcKineticEnergy;

const calcKineticEnergy = (asteroidDiameter, relativeSpeedKmPerHour) => {
  const density = 3; // g/cm^3 (mean density for S class asteroids)
  const radius = asteroidDiameter / 2; // meters

  const relativeSpeedMetersPerSecond = (relativeSpeedKmPerHour * 3600) / 1000;

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); //m
  const mass = volume * density * 1e-6; // Convert mass to kilograms
  const kineticEnergy = (mass * Math.pow(relativeSpeedMetersPerSecond, 2)) / 2;

  return kineticEnergy;
};

export default calcKineticEnergy;

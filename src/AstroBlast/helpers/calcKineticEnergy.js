/**
 *
 *
 */

const calcKineticEnergy = (asteroidDiameter, relativeSpeedKmPerHour) => {
  const density = 2000; // kg/m³ (chosen density for the asteroid)
  const radius = asteroidDiameter / 2; // meters

  const relativeSpeedKmH = relativeSpeedKmPerHour;
  const relativeSpeedMetersPerSecond = relativeSpeedKmPerHour * (1000 / 3600);

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // cubic meters
  const mass = volume * density; // Mass in kilograms

  const kineticEnergy =
    (1 / 2) * (mass * Math.pow(relativeSpeedMetersPerSecond, 2)); //joules

  const KEgJ = kineticEnergy / 1e9;

  return { kineticEnergy, KEgJ, mass };
};

export default calcKineticEnergy;

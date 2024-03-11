/**
 *
 *
 */

//Blast radius is calculated using yield scaling
//radius is proportional to the cube root of the impact energy
const calcBlastRadius = (energy) => {
  const kgFactor = 4184; // Energy Release per kilo  of TNT
  const mtFactor = 4184000000000000; // per megatonne of TNT

  const blastRadius = Math.cbrt(energy / kgFactor); // Result in kilometers;

  return {
    blastRadius,
    tnt: {
      kg: energy / kgFactor,
      mt: energy / mtFactor,
    },
  };
};

function calculateRichterScaleMagnitude(energyJoules) {
  const E0 = Math.pow(10, 4.8); // Reference energy
  const R = (2 / 3) * Math.log10(energyJoules / E0);
  return R;
}

//Calculates the asteroids mass, impact energy, subsequent blast radius, in multiple measurement units
const calcImpactValues = (asteroidDiameter, relativeSpeedKmPerHour) => {
  const density = 2000; // kg/m³ (chosen as the density of an average rocky asteroid)
  const radius = asteroidDiameter / 2; // meters

  const relativeSpeedMetersPerSecond = relativeSpeedKmPerHour * (1000 / 3600);

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // cubic meters
  const massKg = volume * density; // Mass in kilograms

  const kineticEnergy =
    (1 / 2) * (massKg * Math.pow(relativeSpeedMetersPerSecond, 2)); //joules

  const blastRadiusResult = calcBlastRadius(kineticEnergy);

  const richterScale = calculateRichterScaleMagnitude(kineticEnergy);

  const result = {
    mass: {
      kg: massKg,
      t: massKg / 1000,
    },
    energy: {
      j: kineticEnergy,
      gj: kineticEnergy / 1e9,
    },
    blastRadius: {
      m: blastRadiusResult.blastRadius,
      km: blastRadiusResult.blastRadius / 1000,
    },
    tnt: {
      kg: blastRadiusResult.tnt.kg,
      mt: blastRadiusResult.tnt.mt,
      t: blastRadiusResult.tnt.kg / 1000,
    },
    richterScale,
  };

  return result;
};

export default calcImpactValues;

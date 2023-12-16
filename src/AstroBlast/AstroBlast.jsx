import EnergyBlastMap from "./EnergyBlastMap";
import calcKineticEnergy from "./helpers/calcKineticEnergy";
import calcBlastRadius from "./helpers/calcBlastRadius";
const AstroBlast = () => {
  const asteroidDiameter = 26.8; // meters
  const relativeSpeedKmPerHour = 34058; // km/h

  const kineticEnergy = calcKineticEnergy(
    asteroidDiameter,
    relativeSpeedKmPerHour
  );
  const blastRadiusM = calcBlastRadius(kineticEnergy);
  console.log(blastRadiusM);
  return (
    <div style={{ height: "300px", paddingTop: "5rem" }}>
      AstroBlast
      <EnergyBlastMap />
    </div>
  );
};

export default AstroBlast;

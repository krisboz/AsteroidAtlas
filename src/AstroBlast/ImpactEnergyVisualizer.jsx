import EnergyBlastMap from "./EnergyBlastMap";
import calcKineticEnergy from "./helpers/calcKineticEnergy";
import calcBlastRadius from "./helpers/calcBlastRadius";
import "./styles/ImpactEnergyVisualizer.scss";
import EnergyInfo from "./components/EnergyInfo";
const ImpactEnergyVisualizer = ({ name, diameter, speedKmH, func }) => {
  //it would power a city of 1.000.000 people for ... years
  //

  /**
   * Remember, this tool calculates asteroids impact energy solely based
   *  on their relative speed and size. It doesn't consider other factors
   *  or illustrate the actual consequences of even seemingly small blast radii.
   *  According to NASA, asteroids larger than 2 km could have worldwide effects.
   */

  const kineticEnergy = calcKineticEnergy(diameter, speedKmH);
  const blastRadiusM = calcBlastRadius(kineticEnergy);
  console.log({ kineticEnergy, blastRadiusM });
  return (
    <div className="astro-blast-screen">
      <button onClick={func}>Close</button>
      <div className="blast-header">
        <h1>Impact Energy Visualizer</h1>
        <h2>Energy {name} would generate on impact</h2>
      </div>

      <div className="map-flex-container">
        <EnergyBlastMap blastRadius={blastRadiusM} />

        <EnergyInfo
          name={name}
          size={diameter}
          energy={kineticEnergy}
          blastRadius={blastRadiusM}
        />
      </div>
    </div>
  );
};

export default ImpactEnergyVisualizer;

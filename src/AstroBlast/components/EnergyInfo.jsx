import "../styles/EnergyInfo.scss";
import { GiDynamite } from "react-icons/gi";

const EnergyInfo = ({ name, size, energy, blastRadius }) => {
  //Augsburg
  //Landshut
  //Erding

  return (
    <article className="energy-info-container">
      <p>{name}</p>
      <table>
        <tbody>
          <tr>
            <td className="label">Size</td>
            <td className="value">{size} m</td>
          </tr>
          <tr>
            <td className="label">Energy</td>
            <td className="value">
              {Math.round(energy).toLocaleString("de-DE")} J
            </td>
          </tr>
          <tr>
            <td className="label">Blast radius</td>
            <td className="value">
              {Math.round(blastRadius).toLocaleString("de-DE")} m
            </td>
          </tr>
          <tr>
            <td className="label">
              <GiDynamite />
            </td>
            <td className="value">
              {Math.round(energy / 4184).toLocaleString("de-DE")} g
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  );

  //TODO for the love of god make a dynamic version instead of this monstrosity

  /**
   *   if (size < 25) {
    return (
      <article className="energy-info-container">
        <p>
          {name} would probably burn up as it entered the Earth's atmosphere and
          cause no damage
        </p>
        <p>
          If it didn't burn out, it would impact the Earth with approximately{" "}
          {Math.round(energy).toLocaleString("de-DE")} Joules
        </p>
        <p>
          That is the equivalent of{" "}
          {Math.round(energy / 4184).toLocaleString("de-DE")} sticks of dynamite
        </p>
        <p>
          It's blast radius would be{" "}
          {blastRadius.toFixed().toLocaleString("de-DE")} meters
        </p>
      </article>
    );
  }

  if (size > 25 && size < 1000) {
    return (
      <article className="energy-info-container">
        <p>
          {name} would cause local damage but most likely wouldn't trigger
          catastrophic events
        </p>
        <p>
          It would impact the Earth with approximately{" "}
          {Math.round(energy).toLocaleString("de-DE")} Joules
        </p>
        <p>
          That is the equivalent of{" "}
          {Math.round(energy / 4184).toLocaleString("de-DE")} sticks of dynamite
        </p>
        <p>
          It's blast radius would be{" "}
          {blastRadius.toFixed().toLocaleString("de-DE")} meters
        </p>
      </article>
    );
  }

  if (size > 1000) {
    return (
      <article className="energy-info-container">
        <p>
          {name} would most likely cause worldwide and possibly catastrophic
          effects
        </p>
        <p>
          It would impact the Earth with approximately{" "}
          {Math.round(energy).toLocaleString("de-DE")}
          Joules
        </p>
        <p>
          That is the equivalent of{" "}
          {Math.round(energy / 4184).toLocaleString("de-DE")} sticks of dynamite
        </p>
        <p>
          It's blast radius would be{" "}
          {Math.round(blastRadius).toLocaleString("de-DE")} meters
        </p>
      </article>
    );
  }
   */
};

export default EnergyInfo;

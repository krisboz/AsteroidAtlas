import "../styles/EnergyInfo.scss";
import { IoIosArrowDown } from "react-icons/io";
const EnergyInfo = ({ name, size, speed, calculatedValues }) => {
  return (
    <article className="energy-info-container">
      <h4>{name}</h4>
      <table>
        <tbody>
          <tr>
            <td className="label" title="Relative Velocity">
              Speed
            </td>
            <td className="value">
              {Math.round(speed).toLocaleString("de-DE")} km/h
            </td>
          </tr>
          <tr>
            <td className="label" title="Diameter of the asteroid">
              Size
            </td>
            <td className="value">{Math.round(size)} m</td>
          </tr>
          <tr>
            <td className="label" title="Assuming density of 2 g/cm^3">
              Mass
            </td>
            <td className="value">
              {Math.round(calculatedValues.mass.t).toLocaleString("de-DE")} t
            </td>
          </tr>

          <tr>
            <td className="label" title="Using KE = 1/2mv^2 ">
              Energy
            </td>
            <td className="value">
              {Math.floor(calculatedValues.energy.gj).toLocaleString("de-DE")}{" "}
              gJ
            </td>
          </tr>
          <tr>
            <td
              className="label"
              title="if we converted the energy to a TNT equivalent"
            >
              Blast radius
            </td>
            <td className="value">
              {Math.round(calculatedValues.blastRadius.km).toLocaleString(
                "de-DE"
              )}{" "}
              km
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <p>Scroll Down For More Info</p>
        <div className="arrow-container">
          <IoIosArrowDown />
          <IoIosArrowDown />
          <IoIosArrowDown />
        </div>
      </div>
    </article>
  );
};

export default EnergyInfo;

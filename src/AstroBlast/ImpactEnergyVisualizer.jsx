import EnergyBlastMap from "./EnergyBlastMap";
import calcKineticEnergy from "./helpers/calcKineticEnergy";
import calcBlastRadius from "./helpers/calcBlastRadius";
import "./styles/ImpactEnergyVisualizer.scss";
import EnergyInfo from "./components/EnergyInfo";
import { IoArrowBackSharp } from "react-icons/io5";
import ImpactHeader from "./components/ImpactHeader";
import AdditionalInfo from "./components/AdditionalInfo";
import { useLocation } from "react-router-dom";
import useHideCometShower from "../zustand/useHideCometShower";
import { MdKeyboardArrowUp as ArrowUp } from "react-icons/md";
import useScrollStore from "../zustand/useScrollStore";
import { useEffect } from "react";

const ImpactEnergyVisualizer = ({ name, diameter, speedKmH, func }) => {
  const { toggleHideCometShower } = useHideCometShower();

  //it would power a city of 1.000.000 people for ... years
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  /**
   * Remember, this tool calculates asteroids impact energy solely based
   *  on their relative speed and size. It doesn't consider other factors
   *  or illustrate the actual consequences of even seemingly small blast radii.
   *  According to NASA, asteroids larger than 2 km could have worldwide effects.
   */

  const { pathname } = useLocation();
  const { scrollY } = useScrollStore();
  const currPath = pathname.split("/")[1];

  const handleClose = (event) => {
    toggleHideCometShower();
    func(event);
  };

  const handleGoTop = () => {
    window.scrollTo(0, 0);
  };
  const energyValues = calcKineticEnergy(diameter, speedKmH);
  const tntValues = calcBlastRadius(energyValues.kineticEnergy);

  return (
    <div className="astro-blast-screen">
      <div className="back-btn-container">
        <button onClick={handleClose}>
          {" "}
          <IoArrowBackSharp /> Back to{" "}
          {currPath === "asteroid" ? "Page" : "List"}
        </button>
      </div>

      <ImpactHeader diameter={diameter} name={name} />

      <div className="map-flex-container">
        <EnergyBlastMap blastRadius={tntValues.blastRadius / 2} />

        <EnergyInfo
          name={name}
          size={diameter}
          energy={energyValues.KEgJ}
          blastRadius={tntValues.blastRadius}
          speed={speedKmH}
          mass={energyValues.mass}
        />
      </div>
      <AdditionalInfo
        speed={speedKmH}
        mass={energyValues.mass}
        energy={energyValues.kineticEnergy}
        tntEquivalent={tntValues.tntEquivalent}
        size={diameter}
      />

      {scrollY > 400 && (
        <button className="go-top-btn" onClick={handleGoTop}>
          <ArrowUp />
        </button>
      )}
    </div>
  );
};

export default ImpactEnergyVisualizer;

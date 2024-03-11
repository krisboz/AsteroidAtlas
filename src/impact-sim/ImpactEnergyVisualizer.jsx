import EnergyBlastMap from "./EnergyBlastMap";
import calcImpactValues from "./helpers/calcImpactValues";
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

//Takes asteroid data and returns different effects that would happen in case of an impact

const ImpactEnergyVisualizer = ({ name, diameter, speedKmH, func }) => {
  //Hiding the background animation, hopefully to make it more optimized since this component also
  //has a lot of elements and some animations
  const { toggleHideCometShower } = useHideCometShower();

  //Reset to top of page because its not a different route than the component that links to it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const calculatedValues = calcImpactValues(diameter, speedKmH);

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

      <div className="map-pos-container">
        <EnergyBlastMap blastRadius={calculatedValues.blastRadius.m / 2} />

        <EnergyInfo
          name={name}
          size={diameter}
          speed={speedKmH}
          calculatedValues={calculatedValues}
        />
      </div>
      <AdditionalInfo
        speed={speedKmH}
        size={diameter}
        calculatedValues={calculatedValues}
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

import React from "react";
import { WiTsunami } from "react-icons/wi";
import { RiEarthquakeLine } from "react-icons/ri";
import {
  GiMineExplosion,
  GiEruption,
  GiFragmentedMeteor,
} from "react-icons/gi";

import SingleEffect from "./SingleEffect";
import "../styles/OtherEffects.scss";
import DistalEffects from "./DistalEffects";

/**
   * EFFECTS
   * Airbursts
   * - when the incoming projectile breaks up into many smaller projectiles in the atmosphere
   * Fireball
   * -The Fireball is the first potentially damaging effect after an impact
   * 
   * Seismic Shaking
   * aka earthquakes that spread from the point of impact which can be devastating
   * 
   * Ejecta Deposition
   * During an impact a lot of material is kicked up which then falls back to the surface as a sort of a fragment blanket.
   
    Tsunamis, 
    impact mechanics are a bit different when the impact target is the ocean, however such an impact can produce massive tsunamis.
  

   *
   * that killed dinosaurs Chicxulub 20kps, 17km wide, 300ZJ en
   * 72000.00kph
   */

const OtherEffects = () => {
  const tsunamiObj = {
    name: "Tsunamis",
    description:
      "In the event of a water impact, tsunamis can be triggered by the displacement of large volumes of water. These colossal waves propagate across oceans, presenting a unique and powerful consequence of celestial bodies colliding with Earth's watery surfaces.",
    icon: <WiTsunami />,
  };

  const earthquakeObj = {
    name: "Earthquakes",
    description:
      "Asteroids impact with such force that their quakes can be felt and measured kilometers away. This seismic activity provides crucial data for understanding the Earth's response to cosmic collisions.",
    icon: <RiEarthquakeLine />,
  };

  const fireballObj = {
    name: "Fireball",
    description:
      "The fireball is the initial burst of energy following some asteroid impacts, indicating potential damage. Studying these fireballs is essential for unraveling the mysteries of celestial collisions.",
    icon: <GiMineExplosion />,
  };

  const ejectaObj = {
    name: "Ejecta Deposition",
    description:
      "During an impact, material is kicked up and falls back as a fragment blanket. Analyzing this ejected material provides valuable insights into the geological aftermath of cosmic encounters.",
    icon: <GiEruption />,
  };

  const airburstObj = {
    name: "Airburst",
    description:
      "Some asteroids break up or burst into smaller pieces upon entering the atmosphere, creating a celestial display. The study of airbursts contributes to our understanding of the dynamic processes involved in cosmic interactions.",
    icon: <GiFragmentedMeteor />,
  };

  return (
    <section className="other-effects">
      <div className="title-container">
        <h3>Other effects </h3>
      </div>
      <p>
        Even a small asteroid or blast radius could have devastating
        consequences. <br />
        Some of the direct, instant consequences are as follows:
      </p>

      <div className="effects-container">
        <SingleEffect effectData={fireballObj} />
        <SingleEffect effectData={airburstObj} />
        <SingleEffect effectData={earthquakeObj} />
        <SingleEffect effectData={ejectaObj} />
        <SingleEffect effectData={tsunamiObj} />
      </div>

      <DistalEffects />
    </section>
  );
};

export default OtherEffects;

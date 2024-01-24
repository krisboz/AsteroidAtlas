import React from "react";

const ImpactHeader = ({ diameter, name }) => {
  let atmosphereBurnUpText;
  let followUp;

  switch (true) {
    case diameter < 25:
      atmosphereBurnUpText = `Given it's size ${name} would probably burn up in the atmosphere and cause no damage.`;
      break;
    case diameter > 25 && diameter < 50:
      atmosphereBurnUpText = `Given ${name}'s size a remaining chunk would survive atmosphere burn up, but damage is going to be low.`;
      break;

    case diameter >= 50 && diameter < 150:
      atmosphereBurnUpText = `A bigger chunk of ${name} would survive atmosphere burn up, but the damage is going to be low.`;
    case diameter >= 150 && diameter < 1500:
      atmosphereBurnUpText = `Given it's size ${name} wouldn't burn up in the atmosphere and the remaining chunk would have effects varying from none to highly localized damage.`;
      break;
    case diameter >= 1500 && diameter < 2000:
      atmosphereBurnUpText = `${name} is a fairly sized asteroid, it would get through the atmosphere fairly unscathed, it would definitely cause local damage but the possibility of catastrophic effects is low.`;
      break;
    default:
      atmosphereBurnUpText = `${name} is a big one, it would impact the Earth with a tremendous amount of energy, it would cause worldwide and possibly catastrophic effects.`;
  }
  return (
    <div className="blast-header">
      <h2>Impact Sim</h2>
      <h4>{atmosphereBurnUpText}</h4>
      <h4>
        To be able to show impact data for a wide range of sizes this app
        ignores the atmospheric burn up effects.
      </h4>
    </div>
  );
};

export default ImpactHeader;

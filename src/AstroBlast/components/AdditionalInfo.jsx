import "../styles/AdditionalInfo.scss";
import OtherEffects from "./OtherEffects";

const AdditionalInfo = ({ speed, size, calculatedValues }) => {
  //The asteroid that wiped out the dinosaurs
  const chicxulub = {
    name: "Chicxulub",
    diameter: 17_000,
    speed: 72_000,
    energy: 3e23,
  };

  const hiroshimaEnergy = 0.015;

  //Returns percentage difference between a base and a new number
  const calcPercentageDiff = (newnum, basenum) => {
    const percentageDiff = (((newnum - basenum) / basenum) * 100).toFixed(2);

    if (percentageDiff === 0) {
      return "the same as";
    } else {
      return {
        percentage: percentageDiff < 0 ? percentageDiff * -1 : percentageDiff,
        quantity: percentageDiff < 0 ? "less" : "more",
      };
    }
  };

  //Calculated differences between current asteroid and chicxulub
  const chicDiff = {
    size: calcPercentageDiff(size, chicxulub.diameter),
    energy: calcPercentageDiff(calculatedValues.energy.gj, chicxulub.energy),
    speed: calcPercentageDiff(speed, chicxulub.speed),
  };

  return (
    <article className="additional-info">
      <div className="title-container">
        <h2>Additional Info</h2>
      </div>
      <section className="more-data">
        <div className="data-thing">
          <p>
            Energy released would be equal to{" "}
            {calculatedValues.tnt.mt > 1
              ? `${Math.round(calculatedValues.tnt.mt).toLocaleString(
                  "hr-HR"
                )} megatonnes `
              : `${Math.round(calculatedValues.tnt.t)} tonnes `}
            of TNT
          </p>
          <ul>
            <li>
              {" "}
              That is {Math.floor(
                calculatedValues.tnt.mt / hiroshimaEnergy
              )}{" "}
              times the Hiroshima bomb
            </li>
            <li>
              TNT Equivalent is calculated with the kinetic energy value from
              it's speed and size
            </li>
          </ul>
        </div>
        <div className="data-thing">
          <p>
            An energy value like this one would equal to an earthquake at {""}
            {calculatedValues.richterScale.toFixed(3)} on the Richter scale.
          </p>

          <ul>
            <li>Earthquakes are a result of enormous amounts of energy</li>
            <li>
              Because of that it may seem that a large impact produces very
              little seismic activity
            </li>
          </ul>
        </div>
        <div className="data-thing">
          <p>
            It would be {chicDiff.energy.percentage}
            {"% "}
            {chicDiff.energy.quantity === "more" ? "stronger" : "weaker"} than
            Chicxulub, the asteroid that wiped out the dinosaurs
          </p>
          <ul>
            <li>It's size is {chicDiff.size.percentage}% less</li>
            <li>
              Traveling with {chicDiff.speed.percentage}%{" "}
              {chicDiff.speed.quantity} speed
            </li>
            <li>
              Would impact with {chicDiff.energy.percentage}%{" "}
              {chicDiff.energy.quantity} energy
            </li>
          </ul>
        </div>
      </section>
      <OtherEffects />
    </article>
  );
};

export default AdditionalInfo;

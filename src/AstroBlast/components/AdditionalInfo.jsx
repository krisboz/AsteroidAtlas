import "../styles/AdditionalInfo.scss";
import OtherEffects from "./OtherEffects";

const AdditionalInfo = ({ speed, mass, size, energy, tntEquivalent }) => {
  const chicxulub = {
    name: "Chicxulub",
    diameter: 17_000,
    speed: 72_000,
    energy: 3e23,
  };

  //TODO XD
  const littleBoyEnergy = 15;

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

  return (
    <article className="additional-info">
      <div className="title-container">
        <h2>Additional Info</h2>
      </div>
      <section className="more-data">
        <div className="data-thing">
          <p>
            Energy released would be equal to{" "}
            {Math.round(tntEquivalent / 1000000000000).toLocaleString("hr-HR")}{" "}
            Mt of TNT
          </p>
          <ul>
            <li>
              {" "}
              That is {Math.floor(tntEquivalent / 1000000000000 / 0.015)} times
              the Hiroshima bomb
            </li>
            <li>
              TNT Equivalent is calculated with the kinetic energy value from
              it's speed and size
            </li>
          </ul>
        </div>
        <div className="data-thing">
          <p>
            It would produce a seismic event at{" "}
            {((tntEquivalent / 1000000000000) * 0.001).toFixed(2)} on the
            Richter scale
          </p>
        </div>
        <div className="data-thing">
          <p>
            It would be{" "}
            {
              calcPercentageDiff(energy / 1000000000, chicxulub.energy)
                .percentage
            }
            {"% "}
            {calcPercentageDiff(energy / 1000000000, chicxulub.energy)
              .quantity === "more"
              ? "stronger"
              : "weaker"}{" "}
            than Chicxulub, the asteroid that wiped out the dinosaurs
          </p>
          <ul>
            <li>
              It's size is{" "}
              {calcPercentageDiff(size, chicxulub.diameter).percentage}% less
            </li>
            <li>
              Traveling with{" "}
              {calcPercentageDiff(speed, chicxulub.speed).percentage}%{" "}
              {calcPercentageDiff(speed, chicxulub.speed).quantity} speed
            </li>
            <li>
              Would impact with{" "}
              {
                calcPercentageDiff(energy / 1000000000, chicxulub.energy)
                  .percentage
              }
              %{" "}
              {
                calcPercentageDiff(energy / 1000000000, chicxulub.energy)
                  .quantity
              }{" "}
              energy
            </li>
          </ul>
        </div>
      </section>
      <OtherEffects />
    </article>
  );
};

export default AdditionalInfo;

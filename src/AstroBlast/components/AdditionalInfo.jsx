import "../styles/AdditionalInfo.scss";
import OtherEffects from "./OtherEffects";

const AdditionalInfo = ({ speed, mass, size, energy, tntEquivalent }) => {
  const chicxlubEnergy = 300; //ZJ

  const chicxclub = {
    name: "Chicxulub",
    diameter: 17_000,
    speed: 72_000,
    energy: 3e23,
  };

  //TODO XD
  const littleBoyEnergy = 15;

  console.log("energy bič", chicxclub.energy - 3e23);

  /**
   * Even a seemingly small blast radius could have other related serious effects
   * thermal radiation
   * earthquakes
   * ejecta deposition
   * airblast
   * if hit in water tsunamis
   * 
   * 
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
  //Returns percentage difference between a base and a new number
  const calcPercentageDiff = (newnum, basenum) => {
    const percentageDiff = Math.floor(((newnum - basenum) / basenum) * 100);

    if (percentageDiff === 0) {
      return "the same as";
    } else {
      return {
        percentage: percentageDiff < 0 ? percentageDiff * -1 : percentageDiff,
        quantity: percentageDiff < 0 ? "less" : "more",
      };
    }
  };

  //more less function
  //kiloton equivalent
  //speed
  //mass
  //energy

  return (
    <article className="additional-info">
      <div className="title-container">
        <h2>Additional Info</h2>
      </div>
      <section className="more-data">
        <div className="data-thing">
          <p>
            Energy released would be equal to{" "}
            {Math.round(tntEquivalent / 1000).toLocaleString("de-DE")} Mt of TNT
          </p>
          <ul>
            <li>
              {" "}
              That is{" "}
              {calcPercentageDiff(
                tntEquivalent,
                littleBoyEnergy
              ).percentage.toLocaleString("de-DE")}
              % {calcPercentageDiff(tntEquivalent, littleBoyEnergy).quantity}{" "}
              than Little Boy
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
            {(tntEquivalent * 0.0001).toFixed(2)} on the Richter scale
          </p>
        </div>
        <div className="data-thing">
          <p>
            It would be{" "}
            {
              calcPercentageDiff(energy / 1000000000, chicxclub.energy)
                .percentage
            }
            {"% "}
            {calcPercentageDiff(energy / 1000000000, chicxclub.energy)
              .quantity === "more"
              ? "stronger"
              : "weaker"}{" "}
            than Chicxlub, the asteroid that wiped out the dinosaurs
          </p>
          <ul>
            <li>
              It's size is{" "}
              {calcPercentageDiff(size, chicxclub.diameter).percentage}% less
            </li>
            <li>
              Traveling with{" "}
              {calcPercentageDiff(speed, chicxclub.speed).percentage}%{" "}
              {calcPercentageDiff(speed, chicxclub.speed).quantity} speed
            </li>
            <li>
              Would impact with{" "}
              {
                calcPercentageDiff(energy / 1000000000, chicxclub.energy)
                  .percentage
              }
              %{" "}
              {
                calcPercentageDiff(energy / 1000000000, chicxclub.energy)
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

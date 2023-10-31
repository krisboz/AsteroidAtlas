import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/AsteroidPage.scss";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdCallMissed } from "react-icons/md";
import parseAsteroidData from "../helpers/parseAsteroidData";
import SizeComparator from "../components/SizeComparator";
import parseDiameterForDisplay from "./../helpers/parseDiameterForDisplay";
import OrbitalData from "../components/OrbitalData";
import getOrbitDataArray from "../helpers/getOrbitDataArray";
import LoadingAnim from "../components/LoadingAnim";
import CountUp from "react-countup";

const AsteroidPage = () => {
  const { id, date } = useParams();
  console.log(date);
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const API_LINK = `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`;

  const [asteroid, setAsteroid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_LINK)
      .then((response) => response.json())
      .then((data) => {
        setAsteroid(parseAsteroidData(data, date));
        getOrbitDataArray(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingAnim />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (asteroid) {
    return (
      <main className="asteroid-page">
        <div className="name-plate">
          <h1>{asteroid.name}</h1>
          <p className="id">#{id}</p>
        </div>
        <section className="basic-info">
          <h2>Basic Asteroid Info</h2>
          <div className="basic-info-data">
            <article className="velocity">
              <p>
                <BsSpeedometer2 />{" "}
                <CountUp end={asteroid.velocity} delay={0} suffix=" km/h" />
              </p>
            </article>
            <article className="hazard">
              <p>{!asteroid.hazard ? "Safe" : "Hazardous"}</p>
            </article>
            <article className="miss-distance">
              <p>
                <MdCallMissed /> Miss By:{" "}
                <CountUp
                  end={asteroid.missDistance}
                  delay={0}
                  suffix=" km"
                  duration={5}
                />
              </p>
            </article>
          </div>
        </section>
        <section className="size">
          <h2>Size</h2>
          <article className="size-data">
            <p>⌀-min: {parseDiameterForDisplay(asteroid.diameter_min)}</p>
            <p>
              ⌀-avg:{" "}
              <span className="avg-size-val">
                {parseDiameterForDisplay(
                  (parseFloat(asteroid.diameter_min) +
                    parseFloat(asteroid.diameter_max)) /
                    2
                )}
              </span>
            </p>
            <p>⌀-max: {parseDiameterForDisplay(asteroid.diameter_max)}</p>
          </article>
          <h2>Compare the Asteroid Size</h2>
          <p>
            Help visualize how big the asteroid is, the app uses the calculated
            average diameter for comparisons
          </p>
        </section>
        <SizeComparator
          asteroidSize={
            parseFloat(asteroid.diameter_min) +
            parseFloat(asteroid.diameter_max) / 2
          }
        />
        <OrbitalData data={asteroid.orbital_data} />
      </main>
    );
  }
};

export default AsteroidPage;

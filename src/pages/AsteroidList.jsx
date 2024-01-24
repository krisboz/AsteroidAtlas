import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompactAsteroid from "../components/CompactAsteroid";
import ImpactEnergyVisualizer from "../AstroBlast/ImpactEnergyVisualizer";
import LoadingAnim from "../components/LoadingAnim";
import "../styles/pages/AsteroidList.scss";
import sortAsteroids from "../helpers/sortAsteroids";
import useAsteroidListStore from "../zustand/useAsteroidListStore";
import useCurrentQueryStore from "../zustand/useCurrentQueryStore";
import Navbar from "../components/Navbar";

const AsteroidList = () => {
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const { currQuery } = useCurrentQueryStore();
  const { startdate, enddate } = useParams();
  const { asteroidListData, setAsteroidListData, resetAsteroidListData } =
    useAsteroidListStore();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isImpactActive, setIsImpactActive] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [asteroids, setAsteroids] = useState(null);
  const [orderBy, setOrderBy] = useState("none");
  const [impactData, setImpactData] = useState(null);

  const toggleIsImpactActive = (event, index) => {
    if (index || index === 0) {
      const { speed, diameter, name } = asteroids[index];
      setImpactData({ speed, diameter, name });
      console.log({ speed, diameter, name });

      setIsImpactActive((prev) => !prev);
    } else {
      setImpactData(null);
      setIsImpactActive((prev) => !prev);
    }
  };

  const parseAsteroidListData = (asteroids) => {
    const parsedList = [];

    Object.keys(asteroids).map((date) => {
      return asteroids[date].map((asteroid) => {
        const newAsteroidObj = {
          name: asteroid.name,
          speed: Math.round(
            asteroid.close_approach_data[0].relative_velocity
              .kilometers_per_hour
          ),
          missDistance: Math.round(
            parseInt(asteroid.close_approach_data[0].miss_distance.kilometers)
          ),
          date: date,
          id: asteroid.id,
          diameter: asteroid.estimated_diameter
            ? (asteroid.estimated_diameter.meters.estimated_diameter_min +
                asteroid.estimated_diameter.meters.estimated_diameter_max) /
              2
            : null,
        };
        parsedList.push(newAsteroidObj);
      });
    });

    return parsedList;
  };

  //API Data fetching, it first checks if there is any in the state and if there is it doesnt make another call
  //It resets the state before any fetch just because it's more used as a back to list button from an individual
  //AsteroidPage component
  useEffect(() => {
    setLoading(true);

    if (asteroidListData.data && asteroidListData.data[`${startdate}`]) {
      setAsteroids(parseAsteroidListData(asteroidListData.data));
      setLoading(false);
      return;
    } else {
      resetAsteroidListData();
      fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${
          enddate !== "none" ? enddate : startdate
        }&api_key=${API_KEY} `
      )
        .then((response) => response.json())
        .then((data) => {
          setAsteroidListData(data.near_earth_objects);
          setAsteroids(parseAsteroidListData(data.near_earth_objects), orderBy);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [currQuery]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  if (error) {
    return (
      <div style={{ marginTop: "150px" }}>
        <p>{error.code}</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <LoadingAnim />;
  }

  if (isImpactActive && impactData) {
    return (
      <ImpactEnergyVisualizer
        name={impactData.name}
        diameter={impactData.diameter}
        speedKmH={impactData.speed}
        func={toggleIsImpactActive}
      />
    );
  }

  return (
    <>
      {!isImpactActive && <Navbar />}
      <main className={`asteroid-list ${animateOut ? "animate-out" : ""}`}>
        <div className="headings">
          <h1>Upcoming Near-Earth Asteroids</h1>
          <h3>Discover a curated list of asteroids approaching Earth</h3>
          <div className="order-container">
            <label htmlFor="order-select">Order by:</label>

            <select name="pets" id="order-select" onChange={handleOrderChange}>
              <option value="none">None</option>
              <option value="diameter">Diameter</option>
              <option value="speed">Speed</option>
              <option value="missDistance">Miss Distance</option>
            </select>
          </div>{" "}
        </div>

        <section className="asteroids-container">
          {sortAsteroids(asteroids, orderBy).map((asteroid, i) => (
            <CompactAsteroid
              asteroid={asteroid}
              orderBy={orderBy}
              key={i}
              index={i}
              impactFunc={toggleIsImpactActive}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default AsteroidList;

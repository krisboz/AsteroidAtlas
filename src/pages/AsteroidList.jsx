import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompactAsteroid from "../components/CompactAsteroid";
import LoadingAnim from "../components/LoadingAnim";
import "../styles/pages/AsteroidList.scss";
import sortAsteroids from "../helpers/sortAsteroids";
import useAsteroidListStore from "../zustand/useAsteroidListStore";
import useCurrentQueryStore from "../zustand/useCurrentQueryStore";

const AsteroidList = () => {
  const { currQuery } = useCurrentQueryStore();
  const { startdate, enddate } = useParams();

  const { asteroidListData, setAsteroidListData, resetAsteroidListData } =
    useAsteroidListStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [asteroids, setAsteroids] = useState(null);
  const [orderBy, setOrderBy] = useState("none");
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;

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
          diameter:
            (asteroid.estimated_diameter.meters.estimated_diameter_min +
              asteroid.estimated_diameter.meters.estimated_diameter_max) /
            2,
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

  return (
    <main className="asteroid-list">
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
          <CompactAsteroid asteroid={asteroid} orderBy={orderBy} key={i} />
        ))}
      </section>
    </main>
  );
};

export default AsteroidList;

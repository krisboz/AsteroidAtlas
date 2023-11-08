import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompactAsteroid from "../components/CompactAsteroid";
import LoadingAnim from "../components/LoadingAnim";
import "../styles/pages/AsteroidList.scss";
import useAsteroidsStore from "../zustand/useAsteroidsStore";
import sortAsteroids from "../helpers/sortAsteroids";

const AsteroidList = () => {
  const { asteroidsState, addAsteroid } = useAsteroidsStore();
  const { startdate, enddate } = useParams();
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
    console.log(
      "parsedList",
      sortAsteroids(parsedList, "speed").map((el) => el.misDistance)
    );
    return parsedList;
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${
        enddate !== "none" ? enddate : startdate
      }&api_key=${API_KEY} `
    )
      .then((response) => response.json())
      .then((data) => {
        setAsteroids(parseAsteroidListData(data.near_earth_objects), orderBy);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [startdate, enddate]);

  const handleOrderChange = (event) => {
    setOrderBy(event.target.value);
  };

  if (error) {
    return (
      <div>
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
          <label for="order-select">Order by:</label>

          <select name="pets" id="order-select" onChange={handleOrderChange}>
            <option value="none">None</option>
            <option value="diameter">Diameter</option>
            <option value="speed">Speed</option>
            <option value="missDistance">Miss Distance</option>
          </select>
        </div>{" "}
      </div>

      {sortAsteroids(asteroids, orderBy).map((asteroid) => (
        <CompactAsteroid asteroid={asteroid} orderBy={orderBy} />
      ))}
    </main>
  );
};

export default AsteroidList;

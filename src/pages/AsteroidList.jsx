import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompactAsteroid from "../components/CompactAsteroid";
import "../styles/AsteroidList.scss";

const AsteroidList = () => {
  const { startdate, enddate } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [asteroids, setAsteroids] = useState(null);
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${
        enddate !== "none" ? enddate : startdate
      }&api_key=${API_KEY} `
    )
      .then((response) => response.json())
      .then((data) => {
        setAsteroids(data.near_earth_objects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <main className="asteroid-list">
      <div className="headings">
        <h1>Upcoming Near-Earth Asteroids</h1>
        <h3>Discover a curated list of asteroids approaching Earth</h3>
      </div>

      {Object.keys(asteroids).map((date) => {
        return asteroids[date].map((asteroid) => {
          return (
            <CompactAsteroid
              name={asteroid.name}
              key={asteroid.id}
              speed={Math.round(
                asteroid.close_approach_data[0].relative_velocity
                  .kilometers_per_hour
              )}
              date={date}
              id={asteroid.id}
            />
          );
        });
      })}
    </main>
  );
};

export default AsteroidList;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompactAsteroid from "../components/CompactAsteroid";
import LoadingAnim from "../components/LoadingAnim";
import "../styles/pages/AsteroidList.scss";
import useAsteroidsStore from "../zustand/useAsteroidsStore";

const AsteroidList = () => {
  const { asteroidsState, addAsteroid } = useAsteroidsStore();
  const { startdate, enddate } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [asteroids, setAsteroids] = useState(null);
  const API_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    setLoading(true);
    if (asteroidsState[`${startdate}`]) {
      console.log("Already there matey");
    }
    //setAsteroids(state data)
    //else
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${
        enddate !== "none" ? enddate : startdate
      }&api_key=${API_KEY} `
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("raw data", data);
        setAsteroids(data.near_earth_objects);
        addAsteroid(data.near_earth_objects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    console.log("ASTEROID STATE", asteroidsState);
  }, [startdate, enddate]);

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
              missDistance={Math.round(
                parseInt(
                  asteroid.close_approach_data[0].miss_distance.kilometers
                )
              )}
              date={date}
              id={asteroid.id}
              diameter={
                (asteroid.estimated_diameter.meters.estimated_diameter_min +
                  asteroid.estimated_diameter.meters.estimated_diameter_max) /
                2
              }
            />
          );
        });
      })}
    </main>
  );
};

export default AsteroidList;

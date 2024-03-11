export const parseAsteroidListData = (asteroids) => {
  const parsedList = [];

  Object.keys(asteroids).map((date) => {
    return asteroids[date].map((asteroid) => {
      const newAsteroidObj = {
        name: asteroid.name,
        speed: Math.round(
          asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour
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

export const fetchAsteroidData = async (startdate, enddate) => {
  return fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startdate}&end_date=${
      enddate !== "none" ? enddate : startdate
    }&api_key=${import.meta.env.VITE_NASA_API_KEY} `
  )
    .then((response) => response.json())
    .then((data) => data.near_earth_objects);
};

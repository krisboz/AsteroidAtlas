import format from "date-fns/format";
const parseAsteroidData = (data) => {
  const diameterHelper = (type) => {
    //type - max || min
    return data.estimated_diameter.meters[`estimated_diameter_${type}`];
  };
  const today = format(new Date(), "yyyy-MM-dd");
  const name = data.name;
  const approach_data = data.close_approach_data.filter(
    (el) => el.close_approach_date === today
  )[0];

  const velocity = approach_data.relative_velocity.kilometers_per_hour;

  const diameter_min = diameterHelper("min");
  const diameter_max = diameterHelper("max");
  const hazardous = data.is_potentially_hazardous_asteroid;
  const missDistance = `${parseInt(
    approach_data.miss_distance.kilometers,
    10
  )} km`;

  const orbiting = approach_data.orbiting_body;
  const h = data.absolute_magnitude_h;
  const orbital_data = {
    first_observed: data.orbital_data.first_observation_date,
    observations_used: data.orbital_data.observations_used,
    description: data.orbital_data.orbit_class_description,
    period: data.orbital_data.orbital_period,
    aphelion: data.orbital_data.aphelion_distance,
    perihelion_distance: data.orbital_data.perihelion_distance,
    perihelion_argument: data.orbital_data.perihelion_argument,
    jupiter_tisserand_invariant: data.orbital_data.jupiter_tisserand_invariant,
    inclination: data.orbital_data.inclination,
    eccentricity: data.orbital_data.eccentricity,
    mean_motion: data.orbital_data.mean_motion,
    semi_major_axis: data.orbital_data.semi_major_axis,
    ascending_node_longitude: data.orbital_data.ascending_node_longitude,
  };

  console.log(data);

  return {
    name,
    velocity,
    diameter_min,
    diameter_max,
    hazardous,
    missDistance,
    orbital_data,
    orbiting,
    h,
  };
};

export default parseAsteroidData;

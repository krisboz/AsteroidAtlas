const getAsteroidPropertyDescription = (property) => {
  const descriptions = {
    aphelion:
      "Aphelion is the point in an asteroid's orbit that is farthest from the Sun. It represents the maximum distance between the asteroid and the Sun during its orbit.",
    ascending_node_longitude:
      "The ascending node is the point where the asteroid's orbit crosses the plane of the solar system. The ascending node longitude is the angle at which the asteroid crosses this plane, measured from a reference direction.",
    eccentricity:
      "Eccentricity is a measure of how elliptical an asteroid's orbit is. A value of 0 represents a perfect circle, while a value close to 1 indicates a highly elongated orbit.",
    epoch:
      "The epoch is a specific point in time (usually given as a Julian date) when the orbital elements are valid. It's the reference time for the asteroid's orbital parameters.",
    inclination:
      "Inclination is the angle between the plane of the asteroid's orbit and the plane of the solar system. It indicates how tilted the asteroid's orbit is relative to the plane of the planets.",
    jupiter_tisserand_invariant:
      "The Jupiter Tisserand Invariant is a parameter that helps classify the asteroid's orbital relationship with Jupiter. A value of 3 indicates a strong interaction with Jupiter, while a value of 4 or greater suggests a more distant orbit.",
    mean_motion:
      "Mean motion is the average angular speed at which the asteroid travels along its orbit. It describes how quickly the asteroid orbits the Sun.",
    perihelion_argument:
      "The perihelion argument is the angle between the ascending node and the point in the asteroid's orbit where it is closest to the Sun (perihelion). It determines the orientation of the asteroid's orbit in space.",
    perihelion_distance:
      "Perihelion distance is the closest distance between the asteroid and the Sun during its orbit. It is a key parameter for understanding the shape of the asteroid's orbit.",
    semi_major_axis:
      "The semi-major axis is half of the major axis of the asteroid's elliptical orbit. It represents the average distance between the asteroid and the Sun and is a fundamental parameter for defining the size of the orbit.",
  };

  return descriptions[property] || "Property not found";
};

export default getAsteroidPropertyDescription;

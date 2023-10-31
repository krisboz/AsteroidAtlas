const calcScale = (asteroidSize) => {
  //All compare to the asteroid, it's always gonna be the same
  //and the compared object is gonna change
  //all are in meters
  const airplaneSize = 50;
  const humanSize = 1.8;
  const whaleSize = 18.3;
  const burjSize = 828;
  const eiffelSize = 300;

  const airplane = airplaneSize / asteroidSize;
  const human = humanSize / asteroidSize;
  const whale = whaleSize / asteroidSize;
  const burj = burjSize / asteroidSize;
  const eiffel = eiffelSize / asteroidSize;

  return {
    airplane,
    human,
    whale,
    burj,
    eiffel,
  };
};

export default calcScale;

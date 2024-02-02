const calcScale = (asteroidSize) => {
  //Determine scale value based on the object and anchor point

  //Sizes in meters
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

  const comparedAnchor = {
    airplane: asteroidSize / airplaneSize,
    human: asteroidSize / humanSize,
    whale: asteroidSize / whaleSize,
    burj: asteroidSize / burjSize,
    eiffel: asteroidSize / eiffelSize,
  };

  return {
    airplane,
    human,
    whale,
    burj,
    eiffel,
    comparedAnchor,
  };
};

export default calcScale;

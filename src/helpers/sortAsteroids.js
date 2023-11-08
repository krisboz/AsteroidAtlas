const sortAsteroids = (arr, sortBy) => {
  if (sortBy === "none") {
    return arr;
  }
  return arr.sort((a, b) => b[`${sortBy}`] - a[`${sortBy}`]);
};

export default sortAsteroids;

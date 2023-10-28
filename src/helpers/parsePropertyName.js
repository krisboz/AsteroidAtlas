const parsePropertyName = (str) => {
  return str
    .split("_")
    .map((el) => el.toUpperCase())
    .join(" ");
};

export default parsePropertyName;

const parseDiameterForDisplay = (val) => {
  if (val > 1000) {
    return `${(val / 1000).toFixed(4)} km`;
  }
  return `${val.toFixed(2)} m`;
};

export default parseDiameterForDisplay;

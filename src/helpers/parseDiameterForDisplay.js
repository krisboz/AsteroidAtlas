const parseDiameterForDisplay = (val) => {
  if (!val) return "Unknown";
  if (val > 1000) {
    return { val: (val / 1000).toFixed(4), unit: " km" };
  }
  return { val: val.toFixed(2), unit: " m" };
};

export default parseDiameterForDisplay;

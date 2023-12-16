const calcBlastRadius = (energy) => {
  const k = 2; // Constant factor (you can adjust as needed)
  const blastRadius = k * Math.pow(energy, 1 / 3);
  const diameter = 2 * blastRadius;
  return diameter;
};

export default calcBlastRadius;

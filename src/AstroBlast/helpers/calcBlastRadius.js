//
/**
 * Given energy value in the TNT equivalent the function calculates
 * the blast radius it would produce
 *
 * For most energy levels the blast radius stays proportional to
 * the cube root of impact energy
 */

const calcBlastRadius = (energy) => {
  const q = 4184; // Energy Release per unit mass of TNT
  const tntEquivalent = energy / q; //Gj of energy, result in Kilotonnes of TNT
  const blastRadius = Math.cbrt(tntEquivalent) / 10; // Result in kilometers;
  return { tntEquivalent, blastRadius };
};

export default calcBlastRadius;

const calcValueRatio = (val1, val2) => {
  //how many times val1 is val2
  //val1 - bigger number, val2 smaller number

  const inputOrder = val1 / val2;
  const reverseOrder = val2 / val1;

  //have it so its reversible
  //if you click on value it switches it around

  console.log("kurčina");
  //somehow
  return { inputOrder, reverseOrder };
};

calcValueRatio();

export default calcValueRatio;

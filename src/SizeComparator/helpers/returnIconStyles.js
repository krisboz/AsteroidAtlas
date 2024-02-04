const ICON_TYPE_ASTEROID = "asteroid";

//Translates scale values into usable css lines that we apply to the svgs inline
const returnIconStyles = (anchorPoint, comparedTo, scales, iconType) => {
  //Translates icons when the scale differences get really big

  //Determine style (scale and transform) for icons

  if (anchorPoint === "asteroid") {
    if (iconType === "asteroid") return null;
    else return `scale(${scales[iconType]}) `;
  } else {
    //Anchor point isnt asteroid, asteroid should change style
    if (iconType !== "asteroid") return null;
    else return `scale(${scales.comparedAnchor[`${comparedTo}`]}) `;
  }
};

export default returnIconStyles;

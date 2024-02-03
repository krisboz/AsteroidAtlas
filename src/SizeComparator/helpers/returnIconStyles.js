//Translates scale values into usable css lines that we apply to the svgs inline
const returnIconStyles = (anchorPoint, comparedTo, scales, iconType) => {
  //Translates icons when the scale differences get really big
  const returnTransformValue = (scale) => {
    if (
      anchorPoint === "asteroid" &&
      (comparedTo === "eiffel" || comparedTo === "burj")
    ) {
      return 0;
    }
    if (scale >= 3 && scale <= 20) {
      return 40;
    } else if (scale >= 20 && scale <= 125) {
      return 44;
    } else if (scale > 125) {
      return 44.5;
    } else return 0;
  };

  //Determine style (scale and transform) for icons
  const returnTransformScaleStyle = (iconType) => {
    if (anchorPoint === "asteroid") {
      if (iconType === "asteroid") return null;
      else
        return `scale(${scales[iconType]}) translateX(${returnTransformValue(
          scales[iconType]
        )}%)`;
    } else {
      //Anchor point isnt asteroid, asteroid should change style
      if (iconType !== "asteroid") return null;
      else
        return `scale(${
          scales.comparedAnchor[`${comparedTo}`]
        }) translateX(-${returnTransformValue(
          scales.comparedAnchor[`${comparedTo}`]
        )}%)`;
    }
  };
  return returnTransformScaleStyle(iconType);
};

export default returnIconStyles;

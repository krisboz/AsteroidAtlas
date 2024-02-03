import { useState, useEffect } from "react";
import calcScale from "../helpers/calcScale";
import "../styles/components/SizeComparator.scss";
import returnIcon from "./helpers/returnIcon";

//Size comparator that compares svg icons of different elements
//that all have the correct relative dimensions and size ratios between them

const SizeComparator = ({ asteroidSize }) => {
  //Determine if user is in mobile or desktop view
  const [mobile, setMobile] = useState(window.innerWidth <= 820);
  const scales = calcScale(asteroidSize);
  //What the asteroid is compared to
  const [comparedTo, setComparedTo] = useState("human");
  //On what element is the comparison anchored
  const [anchorPoint, setAnchorPoint] = useState("asteroid");
  // Calculate the scaling factor for other items relative to the fixed asteroid size
  const handleComparisonChange = (event) => setComparedTo(event.target.value);
  const handleAnchorChange = (event) => {
    setAnchorPoint(event.target.value);
  };

  const handleWindowSizeChange = () => {
    setMobile(window.innerWidth <= 820);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const iconDataObj = { anchorPoint, comparedTo, scales, mobile };

  return (
    <div>
      <div className="selection-container">
        <h3>Click to select what to compare the asteroid to:</h3>
        <select onChange={handleComparisonChange} value={comparedTo}>
          <option value="human">Human</option>
          <option value="airplane">Airplane</option>
          <option value="whale">Whale</option>
          <option value="burj">Burj Khalifa</option>
          <option value="eiffel">Eiffel Tower</option>
        </select>
      </div>

      <div className="comparer">
        <div>{returnIcon("asteroid", iconDataObj)}</div>
        <div>{returnIcon(comparedTo, iconDataObj)}</div>
      </div>
      <div className="anchors-selector">
        <h5>Select your anchor</h5>
        <form onChange={handleAnchorChange}>
          <span>
            <label htmlFor="asteroid">ASTEROID</label>

            <input
              type="radio"
              id="asteroid"
              name="selected-anchor"
              value="asteroid"
              defaultChecked={anchorPoint === "asteroid"}
            ></input>
          </span>
          <span>
            <input
              type="radio"
              id="compared"
              name="selected-anchor"
              defaultChecked={anchorPoint !== "asteroid"}
              value={comparedTo}
            ></input>
            <label htmlFor="compared">{comparedTo.toUpperCase()}</label>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SizeComparator;

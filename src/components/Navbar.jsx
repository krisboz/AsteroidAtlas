import "../styles/Navbar.scss";
import { useState } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import DatePickerComponent from "./DatePicker";
const Navbar = () => {
  const [showDate, setShowDate] = useState(false);

  const location = useLocation();

  //if location.pathname = asteroidList - sort as grid or list button
  //if asteroid, some other options

  const toggleShowDate = () => {
    setShowDate(!showDate);
  };

  //Only render if not currently on home page
  if (location.pathname !== "/") {
    console.log(location.pathname.split("/"));
    return (
      <nav>
        <Link to="/">AsteroidAtlas</Link>

        <ul>
          <li>
            <button onClick={toggleShowDate}>Change Query Date</button>
          </li>
        </ul>
        {showDate && <DatePickerComponent func={toggleShowDate} />}
      </nav>
    );
  }
};

export default Navbar;

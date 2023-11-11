import "../styles/Navbar.scss";
import { useState } from "react";
import { Link, matchRoutes, useLocation, useParams } from "react-router-dom";
import DatePickerComponent from "./DatePicker";
const Navbar = () => {
  const [showDate, setShowDate] = useState(false);

  const location = useLocation();

  const toggleShowDate = () => {
    setShowDate(!showDate);
  };

  //Only render if not currently on home page
  if (location.pathname !== "/") {
    return (
      <nav>
        <Link to="/">AsteroidAtlas</Link>

        <ul style={{ display: "flex", gap: "1rem" }}>
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

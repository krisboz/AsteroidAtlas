import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import "../styles/DatePicker.scss";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCloseSquare as Close } from "react-icons/ai";

const DatePickerComponent = ({ func }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const maxDate = addDays(startDate, 7);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(
      `/asteroidlist/${format(startDate, "yyyy-MM-dd")}/${
        endDate ? format(endDate, "yyyy-MM-dd") : "none"
      }`
    );
    func();
  };

  return (
    <section id="date-picker-container">
      <div className="close-btn-cont">
        <button onClick={func}>
          <Close />
        </button>
      </div>
      <h1>Discover Asteroids on Their Closest Approach to Earth</h1>
      <h3>
        Explore asteroids set to pass nearest to Earth during your selected time
        frame
      </h3>
      <p>
        *If the end date is not specified, only asteroids for the start date
        will be shown
      </p>
      <p>**Max end date is 7 days from the start date</p>

      <form className="dates-container" onSubmit={handleSubmit}>
        <div className="date-container">
          <label htmlFor="date-start">Start Date</label>
          <DatePicker
            name="date-start"
            dateFormat="yyyy/MM/dd"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            required={true}
          />
        </div>

        <div className="date-container">
          <label htmlFor="date-end">End Date (optional)</label>
          <DatePicker
            name="date-end"
            dateFormat="yyyy/MM/dd"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            maxDate={maxDate}
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default DatePickerComponent;

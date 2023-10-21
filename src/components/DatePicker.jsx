import { useState } from "react";
import DatePicker from "react-datepicker";
import "../styles/DatePicker.scss";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  return (
    <section id="date-picker-container">
      <h1>Select a date range to explore asteroids</h1>
      <p>
        *if the end date is left out it will default to 7 days after the start
        date
      </p>

      <div className="dates-container">
        <div className="date-container">
          <label htmlFor="date-start">Start Date</label>
          <DatePicker
            name="date-start"
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
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>

      <button>Search</button>
    </section>
  );
};

export default DatePickerComponent;

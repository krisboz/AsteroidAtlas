import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import "../styles/components/DatePicker.scss";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineCloseSquare as Close } from "react-icons/ai";
import useCurrentQueryStore from "./../zustand/useCurrentQueryStore";

const DatePickerComponent = ({ func }) => {
  const { currQuery, setCurrQuery } = useCurrentQueryStore();
  const [startDate, setStartDate] = useState(new Date());
  const [showEndDate, setShowEndDate] = useState(false);
  const [endDate, setEndDate] = useState(null);
  const maxDate = addDays(startDate, 7);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const startdate = format(startDate, "yyyy-MM-dd");
    const enddate = null;
    setCurrQuery({ startdate, enddate });
    navigate(`/asteroidlist/${startdate}/${enddate ? enddate : "none"}`, {
      state: { forceRefresh: true },
    });
    func();
  };

  const handleOpenDateInput = () => {
    setShowEndDate(true);
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
        Explore asteroids set to pass nearest to Earth during your selected day
      </h3>

      <p>
        *You can add an end date to see the asteroids in the specified time
        frame
      </p>

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

        {showEndDate ? (
          <div className="date-container">
            <label htmlFor="date-end">End Date</label>
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
        ) : (
          <button className="show-enddate-btn" onClick={handleOpenDateInput}>
            Add End Date
          </button>
        )}
        <button className="cta-button" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default DatePickerComponent;

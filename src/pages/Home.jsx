import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/pages/Home.scss";
import DatePickerComponent from "../components/DatePicker";
import { Link } from "react-router-dom";

const Home = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <main className="home">
      <div className="hero-container">
        <h1 className="hero-title">
          <Typewriter
            words={["Asteroid Atlas"]}
            cursor={true}
            cursorBlinking={true}
            typeSpeed={60}
          />
        </h1>

        <section className="hero-description">
          <article className="description-container">
            <p className="description-content">
              Navigate the cosmos using NASA's API data. Select a date, and
              Asteroid Atlas will guide you through the fascinating realm of
              asteroids, sharing details about their names, sizes, and
              distances.
            </p>
          </article>

          <button onClick={toggleShowDatePicker}>Start Exploring!</button>
          <Link to={"/astroblast"} />
        </section>
      </div>

      {showDatePicker && <DatePickerComponent func={toggleShowDatePicker} />}
    </main>
  );
};

export default Home;

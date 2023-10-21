import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "../styles/Home.scss";
import DatePickerComponent from "../components/DatePicker";

const Home = () => {
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
          <a href="#date-picker-container">Start Exploring!</a>
        </section>
      </div>

      <DatePickerComponent />
    </main>
  );
};

export default Home;

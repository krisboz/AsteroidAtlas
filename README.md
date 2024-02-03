# Asteroid Atlas

Asteroid Atlas is a React application that provides information about the closest asteroids to Earth on a given date, utilizing data from NASA's API. Users can explore a list of asteroids, view compact details, and delve into more detailed information, including a unique size comparator feature.

## Live Demo:

Visit the live demo of Asteroid Atlas [https://krisboz.github.io/asteroid-atlas/](https://krisboz.github.io/asteroid-atlas/).

## Features

# Impact Simulator

Calculates and displays the effects that the provided asteroid would cause on impact.

Given the asteroids size and relative speed it:

- **Calculates Mass:** assuming a spheroid shape and a density of 2000 kg/cm3
- **Calculates Kinetic Energy:** using the speed of the asteroid as well as the calculated mass
- **Calculates Blast Radius:** using yield scaling, in which the blast radius is assumed to be proportional to the cube root of the impact energy
- **Draws the Blast Radius on a map:** based on user click and using react-leaflet for the interactive map
- **Compares this asteroid to other famous events:** such as the Hiroshima bomb, or Chicxulub, the asteroid that destroyed the dinosaurs
- **Displays other effects that would be caused by impact:** immediate effects (fireball, seismic shaking) as well as distal effects (acid rains, global darkness)

All in all the feature does some real calculations and returns some real numbers, however it's still in a very primitive state, since an impact event is a wildly complicated affair and to approximate the effects more accurately one would have to build more advanced models to account for as much of the variables as possible.

# Size comparator

Displays size comparisons between the asteroid and other real-life objects.
It:

- Divides sizes of the compared objects to get the ratio
- Translates that to CSS transforms to apply to icons
- Allows switching the item the user is comparing the asteroid to
- Allows to change anchor to see the comparisons from both points of view

- **Date Selection:** Users can select a specific date to view the closest asteroids to Earth on that day.
- **Compact Asteroid List:** Displays a list of asteroids with essential details like name, diameter, speed, and distance from Earth.
- **Detailed View:** Clicking on an asteroid reveals more detailed information, including current speed, safety status, and max/min diameter values.
- **Size Comparator:** Users can compare the size of the asteroid to familiar objects like the Burj Khalifa, a whale, Eiffel Tower, a human, and an airplane.
- **Dynamic Sorting:** The asteroid list can be sorted dynamically by size, speed, or distance.
- **Background Animation:** Features a visually appealing background with animated comet showers and stars.
- **Parallax Scrolling:** The background animation scrolls with a parallax effect, enhancing the user experience.
- **Loading and Error States:** The app responds appropriately to loading and error states during data fetching.
- **Zustand Store:** Utilizes Zustand store to efficiently manage fetched data and avoid unnecessary API calls.
- **Date Handling:** Implements date-fns library and a date picker for a smoother date selection experience.
- **Text Typing Effect:** Uses react-simple-typewriter for a typing effect in certain text elements.
- **Countup Animation:** Utilizes react-countup for a visually appealing count-up animation of compact asteroid components.
- **External Libraries:** Integrates libraries such as react-icons for enhanced UI and user experience.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/asteroid-atlas.git

   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Testing:

Run the provided test for the `cycleDays` function:

```bash
npm run test
```

## Technologies used:

- React
- NASA API
- Zustand
- Sass
- Date-fns
- React Router
- React Leaflet
- React-simple-typewriter
- React-countup
- React-icons

## Acknowledgments:

- Thanks to NASA for providing the asteroid data.
- Inspired by the wonders of our solar system.
- Thanks to Misty1636 for providing a nice starting point for my background animation

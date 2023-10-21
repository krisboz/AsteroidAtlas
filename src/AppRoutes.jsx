import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AsteroidList from "./pages/AsteroidList";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/asteroidlist/:startdate/:enddate"
        element={<AsteroidList />}
      />
    </Routes>
  );
};

export default AppRoutes;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AsteroidList from "./pages/AsteroidList";
import AsteroidPage from "./pages/AsteroidPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/asteroidlist/:startdate/:enddate"
        element={<AsteroidList />}
      />
      <Route path="/asteroid/:id" element={<AsteroidPage />} />
    </Routes>
  );
};

export default AppRoutes;

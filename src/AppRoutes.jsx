import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AsteroidList from "./pages/AsteroidList";
import AsteroidPage from "./pages/AsteroidPage";
import AstroBlast from "./AstroBlast/AstroBlast";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/asteroidlist/:startdate/:enddate"
        element={<AsteroidList />}
      />
      <Route path="/asteroid/:id/:date" element={<AsteroidPage />} />
      <Route path="/astroblast" element={<AstroBlast />} />
    </Routes>
  );
};

export default AppRoutes;

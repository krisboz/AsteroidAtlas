import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <ParallaxProvider>
      <Navbar />
      <AppRoutes />
      <CometShower />
    </ParallaxProvider>
  );
}

export default App;

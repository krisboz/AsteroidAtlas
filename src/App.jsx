import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import Navbar from "./components/Navbar";
import { HashRouter, matchRoutes, useLocation } from "react-router-dom";
import useScrollStore from "./zustand/useScrollStore";
import { ParallaxProvider } from "react-scroll-parallax";

import "./App.scss";

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <AppRoutes />
      <CometShower />
    </ParallaxProvider>
  );
}

export default App;

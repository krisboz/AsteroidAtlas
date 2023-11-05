import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import Navbar from "./components/Navbar";
import { HashRouter, matchRoutes, useLocation } from "react-router-dom";
import useScrollStore from "./zustand/useScrollStore";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <CometShower />
    </>
  );
}

export default App;

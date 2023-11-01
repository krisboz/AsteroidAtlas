import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import Navbar from "./components/Navbar";
import { HashRouter } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <Navbar />
      <HashRouter>
        <AppRoutes />
        <CometShower />
      </HashRouter>
    </>
  );
}

export default App;

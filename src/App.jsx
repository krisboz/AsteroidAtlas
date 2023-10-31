import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <CometShower />
    </BrowserRouter>
  );
}

export default App;

import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

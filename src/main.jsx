import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { UnitProvider } from "./UnitContext.jsx";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UnitProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </UnitProvider>
  </React.StrictMode>
);

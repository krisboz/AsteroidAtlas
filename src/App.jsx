import { useEffect } from "react";
import AppRoutes from "./AppRoutes";
import CometShower from "./components/CometShower";
import { useLocation } from "react-router-dom";

import "./App.scss";

function App() {
  const { pathname } = useLocation();

  //Each time the route resets scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AppRoutes />
      <CometShower />
    </>
  );
}

export default App;

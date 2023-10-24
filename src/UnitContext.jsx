import { createContext, useContext, useState } from "react";

const UnitContext = createContext();

export const useUnitContext = () => useContext(UnitContext);

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric"); //Default unit system

  const changeUnit = (unitArg) => {
    setUnit(unitArg);
  };

  return (
    <UnitContext.Provider value={{ unit, changeUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

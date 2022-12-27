import React, { useState } from "react";
import LightModeContext from "./LightMode-context";

const LightModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const lightTheme = {
    lightMode,
    setLightMode,
    lightBtn: {
      backgroundColor: "#c7cee4",
    },
    lightShadow: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)))`
    },
  };

  return (
    <LightModeContext.Provider value={lightTheme}>
      {children}
    </LightModeContext.Provider>
  );
};

export default LightModeProvider;

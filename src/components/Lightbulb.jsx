import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [lightOn, setLightOn] = useState(false);

  const toggleLight = () => {
    lightOn ? setLightOn(false) : setLightOn(true);
    console.log("Clicked");
  };

  return (
    <div className="lightbulb-container">
      <div
        className={`lightbulb ${lightOn ? "on" : "off"}`}
        onClick={toggleLight}
      >
        <div className="bulb"></div>
      </div>
    </div>
  );
};

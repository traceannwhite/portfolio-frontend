import React from "react";
import "./themes.sass";

const Themes = () => {
  return (
    <div className="themes-container" style={{ width: "100px" }}>
      <img
        src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1630982459/light-bulb-svgrepo-com_ttqkvv.svg"
        className="lightbulb"
      />
      <div className="light-theme"></div>
      <div className="dark-theme"></div>
    </div>
  );
};

export default Themes;

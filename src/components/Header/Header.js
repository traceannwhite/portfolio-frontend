import React from "react";
import "./Header.sass";
import Themes from "../Themes/Themes";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1626301764/Trace_White_softwarE_engineeR_tcq8ow.png"
          style={{ maxWidth: "100px" }}
        />
      </div>
      <Themes></Themes>
    </div>
  );
};

export default Header;

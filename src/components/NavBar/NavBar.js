import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import { BiMenuAltRight } from "react-icons/bi";
import "./nav-bar.sass";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenu = () => setMenuOpen(false);

  const navigation = [
    { link: "/", text: "Home" },
    { link: "/Projects", text: "Projects" },
    { link: "/AboutMe", text: "About Me" },
    { link: "/Contact", text: "Contact" },
  ];
  return (
    <div className="nav-bar">
      <button className="menu-button" open={menuOpen} onClick={handleToggle}>
        {menuOpen ? (
          <VscChromeClose className="menu-close" />
        ) : (
          <BiMenuAltRight className="menu-open" />
        )}
      </button>
      <div className="main-nav">
        <ul className={`menu-links ${menuOpen ? " show-menu" : ""}`}>
          {navigation.map((nav) => (
            <li key={nav.text}>
              <Link
                to={nav.link}
                className="active-link"
                onClick={() => hideMenu()}
                exact="true"
              >
                {nav.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

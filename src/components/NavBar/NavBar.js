import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          "X"
        ) : (
          <img
            src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"
            alt=""
            className="hamburger"
          ></img>
        )}
      </button>
      <ul className={`menu-links ${menuOpen ? " show-menu" : ""}`}>
        {navigation.map((nav) => (
          <li key={nav.text}>
            <Link
              to={nav.link}
              activeClassName="active-link"
              onClick={() => hideMenu()}
              exact
            >
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;

import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo-light.png";
import { useState } from "react";

export default function Header() {
  const [navActive, setNavActive] = useState(false);
  function handleMenu() {
    setNavActive(!navActive);
  }
  return (
    <header className={navActive ? "active" : undefined}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-menu"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Our Menu
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navIcon" onClick={handleMenu}>
        <ion-icon name="menu-outline" className="navIconMenu"></ion-icon>
        <ion-icon name="close-outline" className="navIconMenu"></ion-icon>
      </div>
    </header>
  );
}

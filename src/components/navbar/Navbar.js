import "./Navbar.css";
import { logo } from "../../assets";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar sticky">
      <ul className="navlist left">
        <li>
          <h1>About</h1>
        </li>
        <li>
          <h1>Skills</h1>
        </li>
        <li>
          <h1>Work</h1>
        </li>
        <li>
          <h1>Contact</h1>
        </li>
      </ul>

      <img src={logo} alt="Logo" className="nav-logo" />

      <div className="right"></div>
    </nav>
  );
}

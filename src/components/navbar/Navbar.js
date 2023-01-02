import "./Navbar.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar sticky">
      <ul className="navlist">
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
    </nav>
  );
}

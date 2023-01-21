import "./Navbar.css";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  const sections = [
    { title: "Home", to: "#home" },
    { title: "Work", to: "#work" },
    { title: "About", to: "#about" },
    { title: "Contact", to: "#contact" },
  ];
  return (
    <nav className="navbar sticky">
      <ul className="navlist left">
        {sections.map((section) => (
          <li>
            <NavHashLink
              className={
                isActive(section.to)
                  ? "link-active"
                  : "link"
              }
              smooth
              to={section.to}
            >
              {section.title}
            </NavHashLink>
          </li>
        ))}
      </ul>
      <div className="right"></div>
    </nav>
  );
}

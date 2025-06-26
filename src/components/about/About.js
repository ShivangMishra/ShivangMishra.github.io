import { NavHashLink } from "react-router-hash-link";
import Skills from "../SkillsSphere/SkillsSphere";
import "./About.css";

export default function About() {
  // const skillsContainer = document.getElementById("skills-container");
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-text-zone">
          <h1 className="about-heading">About Me</h1>
          <div className="about-text">
            <p>
              I'm a full-stack software developer building user-centric
              applications for the web, mobile and desktop. Check out some of
              <NavHashLink
                style={{ textDecoration: "none", color: "var(--light-blue)" }}
                smooth
                to="#work"
              >
                {" "}
                my work
              </NavHashLink>
              .
            </p>
            <br />
            <p>
              I learned to code at 13 by building a few arcade games in Java.
              Since then, I've explored various technologies and frameworks,
              worked with global businesses, and collaborated with experienced
              engineers, picking up useful skills and experience along the way.
            </p>
            <br />
            <p>
              I like to build casual sandbox games with Unity engine, and
              contribute to interesting open source projects. I'm open to
              collaborations that can help me learn and grow. If you have a
              project in mind, feel free to reach out!
            </p>
          </div>
        </div>
        <div className="skills-container">
          <Skills />
        </div>
      </div>
    </section>
  );
}

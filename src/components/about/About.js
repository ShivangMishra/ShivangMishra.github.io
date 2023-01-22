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
          <br />
          <div className="about-text">
            <p>
              I'm a Full-stack developer building user-centric applications for
              the web, mobile and desktop. Check out some of
              <NavHashLink style={{textDecoration:"none", color:"var(--light-blue)"}} smooth to="#work"> my work</NavHashLink>.
            </p>
            <br />
            <p>
              Since the beginning of my journey as a passionate software
              developer, I've worked with many agencies, and collaborated with
              experienced developers, picking up useful skills and experience
              along the way.
            </p>
            <br />
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then contact me now.
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

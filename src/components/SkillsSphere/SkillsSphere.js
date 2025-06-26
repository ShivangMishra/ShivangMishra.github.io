import { useEffect } from "react";
import "./SkillsSphere.css";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#json_", title: "Jest" },
  { href: "#json_", title: "JUnit" },
  { href: "#solidity_", title: "Java" },
  { href: "#solidity_", title: "Kotlin" },
  { href: "#html_", title: "HTML5" },
  { href: "#html_", title: "CSS3" },
  { href: "#react_", title: "React" },
  { href: "#react_", title: "React Native" },
  { href: "#python_", title: "Typescript" },
  { href: "#python_", title: "Python" },
  { href: "#git_", title: "Spring Boot" },
  { href: "#json_", title: "JavaFX" },
  { href: "#solidity_", title: "REST" },
  { href: "#react_", title: "Unity" },
  { href: "#python_", title: "Node" },
  { href: "#python_", title: "Symfony" },
  { href: "#python_", title: "Docker" },
  { href: "#python_", title: "PostgreSQL" },
  { href: "#python_", title: "GraphQL" },
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#66FCF1",
      textHeight:25,
      maxSpeed: 0.06,
      // freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 1.0,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 1000,
      initial: [0.2, -0.1],
      depth: 1.1,
    };
    try {
      TagCanvas.Start("skills-canvas", "skills-list", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <>
      <canvas id="skills-canvas" width={800} height={800}></canvas>
      <div id="skills-list" style={{ display: "none" }}>
        <ul>
          {skills.map((skill) => (
            <li key={skill.title}>
              <a href={skill.href}>{skill.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skills;

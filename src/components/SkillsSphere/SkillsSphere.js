import { useEffect } from "react";
import "./SkillsSphere.css";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#json_", title: "Jest" },
  { href: "#json_", title: "JUnit" },
  { href: "#solidity_", title: "Java" },
  { href: "#html_", title: "HTML5" },
  { href: "#html_", title: "CSS" },
  { href: "#react_", title: "ReactJS" },
  { href: "#python_", title: "Tailwind" },
  { href: "#python_", title: "Python" },
  { href: "#git_", title: "Spring" },
  { href: "#json_", title: "JavaFX" },
  { href: "#solidity_", title: "REST" },
  { href: "#html_", title: "SOAP" },
  { href: "#react_", title: "Unity" },
  { href: "#python_", title: "NodeJS" },
  { href: "#python_", title: "Hibernate" },
  { href: "#python_", title: "Kafka" },
  { href: "#python_", title: "SQL" },
  { href: "#python_", title: "GraphQL" },
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#DBE8D4",
      textHeight:25,
      outlineThickness: 5,
      outlineColour: "#FE0853",
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: "sphere",
      zoom: 0.8,
      wheelZoom: false,
      noSelect: true,
      textFont: null,
      freezeDecel: true,
      fadeIn: 1500,
      initial: [0.3, -0.1],
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

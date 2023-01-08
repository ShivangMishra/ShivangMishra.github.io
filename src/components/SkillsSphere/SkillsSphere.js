import { useEffect } from "react";
import "./SkillsSphere.css";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#json_", title: "JSON" },
  { href: "#solidity_", title: "Solidity" },
  { href: "#html_", title: "HTML" },
  { href: "#react_", title: "React" },
  { href: "#python_", title: "Python" },
  { href: "#git_", title: "Git" },
  { href: "#json_", title: "JSON" },
  { href: "#solidity_", title: "Solidity" },
  { href: "#html_", title: "HTML" },
  { href: "#react_", title: "React" },
  { href: "#python_", title: "Python" },
];

const Skills = ({ ...rest }) => {
  useEffect(() => {
    console.log("Loading TagCanvas...");
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#08FDD8",
      outlineThickness: 0.5,
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
      fadeIn: 3000,
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

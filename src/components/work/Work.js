import "./Work.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const projects = [
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [
        "React",
        "Styled Components",
        "Twilio",
        "Figma",
        "Gifted Chat",
      ],
      linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [
        "React",
        "Styled Components",
        "Twilio",
        "Figma",
        "Gifted Chat",
      ],
      linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [],
      linkList: ["", ""],
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [],
      linkList: ["", ""],
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [],
      linkList: ["", ""],
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      techList: [],
      linkList: ["", ""],
      category: "Web Development",
    },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        <h1 className="work-heading">My Work</h1>
        <div className="work-items-container">
          {projects.map((project, i) => (
            // <div className="work-item"></div>
            <WorkItem {...project} align={i % 2 != 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

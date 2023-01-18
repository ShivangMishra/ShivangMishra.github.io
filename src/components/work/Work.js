import "./Work.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const projects = [
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
    {
      title: "XYZ",
      description: "Aliquip nisi nostrud do exercitation tempor anim velit.",
      imgUrl: "https://picsum.photos/400/400",
      category: "Web Development",
    },
  ];

  return (
    <section className="work">
      <div className="work-container">
        <h1 className="work-heading">My Work</h1>
        <div className="work-items-container">
          {projects.map((project) => (
            // <div className="work-item"></div>
            <WorkItem {...project}/>
          ))}
        </div>
      </div>
    </section>
  );
}

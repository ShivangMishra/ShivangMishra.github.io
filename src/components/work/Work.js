import "./Work.css";

export default function Work() {
  const projects = [{}, {}, {}, {}, {}, {}];

  return (
    <section className="work">
      <div className="work-container">
        <h1 className="work-heading">Some things I've built</h1>
        <div className="work-items-container">
          {projects.map((project) => (
            <div className="work-item"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

import draw, { updateMousePosition } from "../../canvasAnim";
import Canvas from "../canvas/Canvas";
import "./Home.css";

export default function Home() {
  return (
    <section className="home" id="home">
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        draw={draw}
        updateMousePosition={updateMousePosition}
      />
      {/* <div className="hero-area"> */}
      <div className="intro-text-zone">
        {/* <div className="glitch"> */}
        {/* <h1 className="intro-big-heading glitch">I'm Shivang Mishra</h1> */}
        {/* <p className="glitch">
          <span aria-hidden="true">I'm Shivang Mishra</span>
          I'm Shivang Mishra
          <span aria-hidden="true">I'm Shivang Mishra</span>
        </p> */}
        {/* </div> */}
        <h1 className="intro-big-heading">I'm Shivang Mishra</h1>
        <h1 className="intro-big-heading">Fullstack Developer</h1>
        <p className="hero-sub">
          I build websites, apps, games, and more.
        </p>
        <br />
        <br />
        <button className="contact-btn">Contact me!</button>
      </div>
    </section>
  );
}

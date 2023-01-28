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
        <div className="glitch">
          <h1 className="intro-big-heading">I'm Shivang Mishra</h1>
        </div>
        <h1 className="intro-big-heading">A Software Developer</h1>
        {/* <p class="glitch">
          <span aria-hidden="true">codepen</span>
          codepen
          <span aria-hidden="true">codepen</span>
        </p> */}
        <p className="hero-sub">
          I specialise in developing Web applications and Games.
        </p>
        <br />
        <br />
        <button className="contact-btn">Contact me!</button>
        {/* </div> */}
      </div>
    </section>
  );
}

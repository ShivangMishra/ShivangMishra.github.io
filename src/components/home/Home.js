import draw, { updateMousePosition } from "../../canvasAnim";
import Canvas from "../canvas/Canvas";
import "./Home.css";

export default function Home() {
  return (
    <section className="home">
      <Canvas
        width={window.innerWidth}
        height={window.innerHeight}
        draw={draw}
        updateMousePosition={updateMousePosition}
      />
      {/* <div className="hero-area"> */}
        <div className="intro-text-zone">
          <h1 className="intro-big-heading">Hi, I'm Shivang,</h1>
          <h1 className="intro-big-heading">Fullstack Developer</h1>
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

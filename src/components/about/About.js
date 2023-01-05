import "./About.css";
export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text-zone">
          <h1 className="about-heading"> About Me</h1>
          <br />
          <div className="about-text">
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <br/>
            <p>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </p>
            <br/>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
        </div>
        <div className="skills-container"></div>
      </div>
    </section>
  );
}

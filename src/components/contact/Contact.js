import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Let's Connect</h1>
        <p className="contact-text">
          I'm interested in freelance opportunities and collaboration on
          ambitious projects. Whether you want to discuss work or just want to
          say Hi, feel free to send a message. I'll get back to you asap!
        </p>
        <br />
        <br />
        <button
          className="contact-btn"
          onClick={() => (window.location.href = "mailto:shivang978@gmail.com")}
        >
          Say Hello!
        </button>
      </div>
    </section>
  );
}

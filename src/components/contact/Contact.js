import { NavHashLink } from "react-router-hash-link";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-text">
          I'm interested in freelance opportunities and collaboration on
          ambitious projects. Whether you want to discuss work or just want to say Hi, feel free to send a message. I'll get back to you asap!
        </p>
        <br />
        <br />
        <button className="contact-btn">Say Hello!</button>
      </div>
    </section>
  );
}

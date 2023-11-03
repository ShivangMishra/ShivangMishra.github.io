import { penopImg, retyrnImg, speacodeImg, printsecImg, goproblemsImg } from "../../assets";
import "./Work.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const projects = [
    {
      title: "Speacode",
      description:
        "An IDE plugin that enables developers to record and attach videos in code comments. Comes with a built-in screen recorder. Available on Jetbrains Marketplace for IntelliJ Idea, PyCharm, Rider, Webstorm, etc.",
      imgUrl: speacodeImg,
      techList: ["Maven", "JUnit", "IntelliJ Platform SDK", "Swing", "Java"],
      url: "https://plugins.jetbrains.com/plugin/15672-speacode-video-screen-recorder-for-code--python-java-js-php-etc",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "PenOp DRE",
      description:
        "Desktop application for carrying out the Data Recapture Exercise (DRE) for Nigerian Retirement Savings Account holders and pensioners at PayOne Solution Systems.",
      imgUrl: penopImg,
      techList: ["Java", "JavaFX", "Lombok", "Webcam Capture", "Jackson"],
      // linkList: ["", ""],
      category: "Web Development",
    },
    {
      title: "Retyrn",
      description:
        "A mobile app for accident reporting and claim resolution to enable the customer to get a fair and speedy resolution of their accident. Available on App Store and Play Store.",
      imgUrl: retyrnImg,
      techList: [
        "OCR ",
        "2FA",
        "iOS",
        "Android",
        "Jest",
        "Typescript",
        "React Native",
      ],
      url: "https://www.retyrn.com/",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "PrintSEC",
      description:
        "A mobile app offering cloud based secure printing service. It allows the users to print their documents to any printer listed in PrintSEC app printer listing based on geographical location of the user.",
      imgUrl: printsecImg,
      techList: [
        "Razorpay",
        "Google Maps",
        "Jest",
        "Typescript",
        "React Native",
      ],
      url: "https://www.printsec.app/",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "Go Problems",
      description:
        "The ultimate resource for Go players featuring a large selection of quality problems, many ways to solve and interact with them, and deep social integration to make problem solving fun and community based.",
      imgUrl: goproblemsImg,
      techList: [
        "Docker",
        "MySQL",
        "Symfony",
        "PHP",
        "Bootstrap",
        "Javascript",
      ],
      url: "https://www.goproblems.com/",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    // {
    //   title: "EikoCircle Website",
    //   description:
    //     "A mobile app offering cloud based secure printing service. It allows the users to print their documents to any printer listed in PrintSEC app printer listing based on geographical location of the user.",
    //   imgUrl: printsecImg,
    //   techList: [
    //     "Razorpay",
    //     "Google Maps",
    //     "iOS",
    //     "Android",
    //     "Jest",
    //     "Typescript",
    //     "React Native",
    //   ],
    //   url: "https://www.retyrn.com/",
    //   // linkList: ["Github", "Show Project"],
    //   category: "Web Development",
    // },
  ];

  return (
    <section className="work" id="work">
      <div className="work-container">
        <h1 className="work-heading">My Work</h1>
        <div className="work-items-container">
          {projects.map((project, i) => (
            // <div className="work-item"></div>
            <WorkItem {...project} align={i % 2 !== 0 ? "left" : "right"} />
          ))}
        </div>
      </div>
    </section>
  );
}

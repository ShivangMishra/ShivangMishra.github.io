import {
  penopImg,
  retyrnImg,
  speacodeImg,
  printsecImg,
  goproblemsImg,
  foliaImg,
  kidzappImg,
} from "../../assets";
import "./Work.css";
import WorkItem from "./WorkItem";

export default function Work() {
  const projects = [
    {
      title: "Folia Mobile App",
      description:
        "Folia Platform allows its users to organize their work into projects, capture ideas precisely using intuitive annotation tools, and share with collaborators in real-time.",
      imgUrl: foliaImg,
      techList: ["React Native", "Typescript", "GraphQL", "Java", "Swift"],
      url: "https://apps.apple.com/us/app/folia/id6737592384?platform=ipad/",
      // linkList: ["Github", "Show Project"],
      category: "Mobile Development",
    },
    {
      title: "Go Problems website",
      description:
        "The ultimate resource for Go players featuring a large selection of quality problems, many ways to solve and interact with them, and deep social integration to make problem solving fun and community based.",
      imgUrl: goproblemsImg,
      techList: ["Symfony", "PHP", "Bootstrap", "React", "Javascript"],
      url: "https://goproblems.com/",
      // linkList: ["Github", "Show Project"],
      category: "Web Development",
    },
    {
      title: "Kidzapp Platform",
      description:
        "A web application designed to help parents find and book kids' activities in the UAE. It comes with a companion mobile app available on App Store and Play Store for personalized experience.",
      imgUrl: kidzappImg,
      techList: ["Next", "React Native", "Typescript"],
      url: "https://kidzapp.com/",
      // linkList: ["Github", "Show Project"],
      category: "Web & Mobile Development",
    },
    {
      title: "Speacode IntelliJ Plugin",
      description:
        "An IDE plugin that enables developers to record and attach videos in code comments. Comes with a built-in screen recorder. Available on Jetbrains Marketplace for IntelliJ Idea, PyCharm, Rider, Webstorm, etc.",
      imgUrl: speacodeImg,
      techList: ["Maven", "JUnit", "IntelliJ Platform SDK", "Swing", "Java"],
      url: "https://plugins.jetbrains.com/plugin/15672-speacode-video-screen-recorder-for-code--python-java-js-php-etc",
      // linkList: ["Github", "Show Project"],
      category: "Plugin",
    },
    {
      title: "PenOp DRE Desktop App",
      description:
        "Desktop application for carrying out the Data Recapture Exercise (DRE) for Nigerian Retirement Savings Account holders and pensioners at PayOne Solution Systems.",
      imgUrl: penopImg,
      techList: ["Java", "JavaFX", "Lombok", "Webcam Capture", "Jackson"],
      // linkList: ["", ""],
      url: "https://www.penop.com.ng/",
      category: "Desktop Development",
    },
    {
      title: "Retyrn Mobile App",
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
      title: "PrintSEC Mobile App",
      description:
        "PrintSEC offers cloud based secure printing service. It allows the users to print their documents to any printer listed in PrintSEC app printer listing based on geolocation of the user.",
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

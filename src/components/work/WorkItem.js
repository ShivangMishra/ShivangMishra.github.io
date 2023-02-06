import { Link } from "react-router-dom";
import "./Work.css";
export default function WorkItem(props) {
  const imgStyle = { gridColumn: props.align === "left" ? "7 / 14" : "1 / 8" };
  const textStyle = {
    textAlign: props.align,
    gridColumn: props.align === "right" ? "7 / 14" : "1 / 8",
  };
  return (
    <div className="work-item">
      <a href={props.url} target="_blank" className="work-item-image-container" style={imgStyle} >
        <img src={props.imgUrl} className="work-item-image" />
      </a>
      <div className="work-item-textzone" style={textStyle}>
        <a className="work-item-title" href={props.url} target="_blank">{props.title}</a>
        <div className="work-item-description">{props.description}</div>
        <div
          className="work-item-tech-list"
          style={{
            flexDirection: props.align === "left" ? "row" : "row-reverse",
          }}
        >
          {props.techList.map((tech) => (
            <div>{tech}</div>
          ))}
        </div>
        {/* <div className="work-item-link-list" style={{flexDirection: props.align === "left"? "row": "row-reverse"}}>
          {props.linkList.map((link) => (
            <Link className="link" href="#">
              {link}
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Work.css";
export default function WorkItem(props) {
  const imgStyle = {gridColumn: props.align === "left" ? "7 / 14" : "1 / 8",};
  const textStyle = {
    textAlign: props.align,
    gridColumn: props.align === "right" ? "7 / 14" : "1 / 8",
  };
  return (
    <div className="work-item">
      <img src={props.imgUrl} className="work-item-image" style={imgStyle}/>
      <div className="work-item-textzone" style={textStyle}>
        <h3 className="work-item-title">{props.title}</h3>
        <div className="work-item-description">{props.description}</div>
        <div className="work-item-tech-list" style={{flexDirection: props.align === "left"? "row": "row-reverse"}}>
          {props.techList.map((tech) => (
            <div>{tech}</div>
          ))}
        </div>
        <div className="work-item-link-list" style={{flexDirection: props.align === "left"? "row": "row-reverse"}}>
          {props.linkList.map((link) => (
            <Link className="link" href="#">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

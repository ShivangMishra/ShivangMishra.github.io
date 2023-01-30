import "./Work.css";
export default function WorkItem(props) {
  return (
    <div className="work-item">
      <img src={props.imgUrl} className="work-item-image"/>
      <div className="work-item-description">
        {props.description}
      </div>
    </div>
  );
}

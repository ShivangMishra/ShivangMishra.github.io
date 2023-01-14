import "./Work.css";
export default function WorkItem(props) {
  return (
    <div className="work-item">
      <img src={props.imgUrl} className="work-item-image"/>
      <div className="work-item-textzone">
        <h2 className="work-item-title">{props.title}</h2>
        <div className="work-item-category">
          {props.category}
        </div>
      </div>
    </div>
  );
}

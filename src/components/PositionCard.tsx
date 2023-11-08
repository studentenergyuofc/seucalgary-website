import { Position } from "../vite-env";

function PositionCard(props: Position): JSX.Element {
  return (
    <div
      className="position-card"
      data-aos="fade-left"
      data-aos-anchor-placement="center-bottom"
    >
      <h2 className="position-card-title">{props.title}</h2>
      <div className="position-card-image-container">
        <img src={props.path} alt="" className="position-card-image" />
      </div>
      <p>{props.description}</p>
      <p className="position-card-deadline">
        <b>Deadline: </b>
        {props.deadline}
      </p>
      <div className="position-card-btn-container">
        <a href="www.google.com">
          <button className="position-card-btn" disabled={!props.isEnable}>
            {props.btnText}
          </button>
        </a>
      </div>
    </div>
  );
}

export default PositionCard;

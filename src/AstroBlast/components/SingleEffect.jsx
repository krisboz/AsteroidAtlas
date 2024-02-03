import { WiTsunami } from "react-icons/wi";
import "../styles/SingleEffect.scss";

const SingleEffect = ({ effectData }) => {
  const { name, description, icon } = effectData;

  return (
    <article className="effect-card">
      <div className="title-container">
        <h3 className="card-title">{name}</h3>
      </div>
      <div className="bottom-separator">
        <div className="image-container">{icon}</div>
        <div className="description-container">
          <p className="card-description">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default SingleEffect;

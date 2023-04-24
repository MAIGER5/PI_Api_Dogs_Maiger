import Style from './card.module.css'
import { Link } from "react-router-dom";
function Card({id, image, name, temperament, weightMin, weightMax}) {
  
  return (
    <div className={Style.carta}>
      <Link to={`/detail/${id}`}>
        <div>
          <h3>Name: {name}</h3>
        </div>
        <div className={Style.imgagen}>
          <img src={image} alt={image  } />
        </div>
        <h3>Temperament: {temperament}</h3>
        <div className={Style.weight}>
          <div>
            <h3>Weight(Metric):</h3>
          </div>
          <div>
            <h4>Min - {weightMin}</h4>
          </div>
          <div>
            <h4>Max - {weightMax}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card

function CardDetail({id, image, name, temperament, weightMin, weightMax, life_span, heightMin, heightMax}) {
  return (
    <div>
        <h3>Id:  {id} </h3>
        <h3>Name:  {name} </h3>
        <h3>Temperaments:  {temperament} </h3>
        <h3>WeightMin: {weightMin} metric </h3>
        <h3>WeightMax: {weightMax} metric </h3>
        <h3>HeightMin: {heightMin} metric </h3>
        <h3>HeightMax: {heightMax} metric </h3>
        <h3>Life:Span:  {life_span} </h3>
        <img src={image} alt={image} />
    </div>
  );
};

export default CardDetail;
import { dogCharacters } from "../index";
import CardDetail from "./cardDetail";


function Detail() {

  const charact = dogCharacters();

  const urlImage = "https://cdn2.thedogapi.com/images/";
  
  return (
    <div>

      {
        charact? charact.map((char)=>
          <CardDetail
            key={char.id}
            id={char.id}
            image={`${urlImage}${char.reference_image_id}.jpg`} 
            name={char.name}
            temperament={char.temperament}
            weightMin={char.weightMin}
            weightMax={char.weightMax}
            heightMin={char.heightMin}
            heightMax={char.heightMax}
            life_span={char.life_span}
          />
        ) : <h3>No hay Perrros</h3>
      }

    </div>
  );
};

export default Detail;


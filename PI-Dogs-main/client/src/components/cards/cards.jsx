import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {SearchBar, Card} from "../index";
import Paginado from "../../page/page";
import { useEffect } from "react";
import Style from './cards.module.css'
import { getCharacters } from "../../redux/actions";
import { Link } from "react-router-dom";

 function Cards() {
  
  const characters = useSelector((state)=> state.allCharacters);
  const urlImage = "https://cdn2.thedogapi.com/images/";
  const dispatch = useDispatch();

  //paginado
  const [dogs, setDogs] = useState(8);
  const [page, setPage] = useState(1);

  const lastPage = page*dogs;  //se relaciona la primera pagina con el state de 8 perros
  const firstPage = lastPage-dogs; // construimos el Next
  const showDogsPage = characters.slice(firstPage, lastPage)
  const paginado = (numPage) => {
    setPage(numPage);
  };
//-------------------------

  useEffect(()=> {
    dispatch(getCharacters())
  },[dispatch]);

  return (
    <div className={Style.container}>


      {/* <Link to='/home'> */}
      {/* <SearchBar/> */}
        {
          characters? characters.map((char)=> 
            <Card
              key={char.id}
              image={`${urlImage}${char.reference_image_id}.jpg`} 
              name={char.name}
              temperament={char.temperament}
              weightMin={char.weightMin}
              weightMax={char.weightMax}
              id={char.id}
            />
          
          
          ) : <h3>No hay Perrros</h3>
        }
      {/* </Link> */}
      {/* <Paginado
        dogs={dogs}
        characters={characters.length}
        paginado={paginado} */}
      {/* /> */}
    </div>
  );
};

export default Cards;
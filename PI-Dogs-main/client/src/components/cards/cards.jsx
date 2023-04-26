import React, { useState, Fragment} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Card} from "../index";
import Style from './cards.module.css'
import { Link } from "react-router-dom";
import Pagination from "../pagination/pagination";

 function Cards() {
  
  const characters = useSelector((state)=> state.allCharacters);
  const urlImage = "https://cdn2.thedogapi.com/images/";
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = characters.slice(indexOfFirstDog, indexOfLastDog);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (

    <Fragment>
      <div className={Style.container}>
        
        <Pagination
            dogsPerPage={dogsPerPage}
            characters={characters.length}
            pagination={pagination}
            currentPage={currentPage}
        />

        <div>
          {
            currentDogs? currentDogs.map((char)=> 
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
        </div>
      </div>
    </Fragment>
    
  );
};

export default Cards;

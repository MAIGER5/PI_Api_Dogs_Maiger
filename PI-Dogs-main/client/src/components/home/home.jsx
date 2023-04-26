import React, { useEffect } from "react";
import { Fragment } from "react";
import Style from './home.module.css'
import {Nav, SearchBar, Cards, FilterBar} from "../index";
import { useDispatch } from "react-redux";
import { getCharacters, getTemperaments } from "../../redux/actions";

function Home() {

  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(getCharacters())
    dispatch(getTemperaments());
  }, [dispatch])  

  return ( 
    // <Fragment>
    <div className={Style.container}>
      {/* <button>Prev</button> 
      <button>Next</button>  */}
      <Nav />
      <SearchBar />
      <FilterBar />
      <Cards />
    </div>
    // </Fragment>
  );
};

export default Home;
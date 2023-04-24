import React from "react";
import { Fragment } from "react";
import Style from './home.module.css'
import {Nav, SearchBar, Cards, FilterBar} from "../index";


function Home() {
  return ( 
    // <Fragment>
    <div className={Style.container}>
        <Nav />
        <SearchBar />
        <FilterBar />
        <Cards />
    </div>
    // </Fragment>
  );
};

export default Home;
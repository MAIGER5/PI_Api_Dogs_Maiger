import React from "react";

function Paginado({characters, dogs, paginado}) {
    const numPage = [];
    for (let i = 1; i <= Math.ceil(characters / dogs); i++) {
      numPage.push(i);
    }
    return (
        <nav>
            {
                numPage && numPage.map((ele)=> (
                    <a onClick={ ()=> paginado(ele) }> {ele} </a>
                ))
            }
        </nav>
    )
}

export default Paginado;

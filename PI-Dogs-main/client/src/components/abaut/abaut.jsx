import style from "./abaut.module.css";
import { Link } from "react-router-dom";



function Abaut() {
  return (
    <>
        <div className={style.container}>
            <img src="https://i.pinimg.com/736x/b8/5f/58/b85f58e2e1e38407f50ea4e2cf30f08f--simple-dog-tattoo-animals-logo.jpg" alt="" />
            <h1>HENRY API-DOG</h1>
            <h3>Proyect: Full Stack Developer</h3>

            <Link to="/home">
              <div className={style.home} >
                <img src="https://media.istockphoto.com/id/961393098/es/vector/bot%C3%B3n-redonda-p%C3%BArpura-icono-inicio.jpg?s=612x612&w=0&k=20&c=fkedbEEZR16xr12OzVrA474OCIxf9vpyQU8_0UCcoRU=" alt="" />
                <h1>HOME</h1>
              </div>
            </Link>

        </div>
    </>
  );
};

export default Abaut;
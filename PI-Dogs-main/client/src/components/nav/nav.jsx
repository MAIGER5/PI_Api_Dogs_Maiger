import {Link} from 'react-router-dom'
import style from "./nav.module.css";

function Nav() {
  return (
    <div className={style.container}>

        <nav>
            <h1 className="navbar-logo">
            Api-Dogs <i className="fab fa-react"></i>
            </h1>
            
            <Link to="/">Abaut</Link>
            <Link to="/home">Home</Link>
            <Link to="/favorites">Favortes</Link>
            <Link to="/createDog">CreateDog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>

        </nav>
    </div>
  );
};

export default Nav
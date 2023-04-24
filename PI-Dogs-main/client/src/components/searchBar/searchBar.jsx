import { useState } from "react";
import {useDispatch} from 'react-redux';
import { getCharactersByName } from "../../redux/actions";


function SearchBar() {

  const dispatch = useDispatch()
  // const [id, setId] = useState();
  const [name, setName] = useState();

  const handlechangeName = (event)=> {
    event.preventDefault()
    setName(event.target.value)
  }

 

  return (
    <div>

      <div>
        <input 
          type="search" 
          onChange={handlechangeName}
        />

        <button
          type="submit"
          onClick={()=> dispatch(getCharactersByName(name))}
        >Search Dog By Name</button>
      </div>
     
    </div>
  );
};

export default SearchBar;
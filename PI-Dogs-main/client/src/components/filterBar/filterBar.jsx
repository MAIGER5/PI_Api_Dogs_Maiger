import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import {filterCardsSource, filterCardsTemperament, orderCards, orderCardsWeight} from "../../redux/actions";


function FilterBar() {

  const dispatch = useDispatch()

  const temperaments = useSelector((state)=> state.temperamentsBD).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );

  const [id, setId] = useState();
  const [valur, setValur] = useState();
  

  const handle_Order = (event) => {
    event.preventDefault();
    const order = event.target.value;
    dispatch(orderCards(order))
  };

  const handle_Order_Weight = (event) => {
    event.preventDefault();
    const orWeight = event.target.value;
    dispatch(orderCardsWeight(orWeight))
  };
  
  const handle_Filter_Source = (event) => {
    event.preventDefault();
    const source = event.target.value;
    dispatch(filterCardsSource(source))
  };
  
  const handle_Filter_Temperament= (event) => {
    event.preventDefault();
    const temps = event.target.value;
    setValur(temps)
    dispatch(filterCardsTemperament(temps))
  };

  return (
    <div>

      <div>
        <p>Alphabetical Orde {valur} </p>
        <select onChange={(event)=>{handle_Order(event)}} name="order" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disable>Select Alphabetical Ordering</option>
          <option on value="Upward" >Upward</option>
          <option value="Falling" >Falling</option>
        </select>
      </div>

      <div>
        <p>Order By Weigth</p>
        <select onChange={(event)=>{handle_Order_Weight(event)}} name="filter_weight" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disable>Select Weight Ordering</option>
          <option value="weightMin" >Lowest to Highest</option>
          <option value="weightMax" >Highest to Lowest</option>
        </select>
      </div>

      <div>
        <p>Filter By Source</p>
        <select onChange={(event)=> {handle_Filter_Source(event)} } name="filter_origen" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disable>Select Origin</option>
          <option value="Api_Dog" >ApiDog</option>
          <option value="Base_Datos" >BaseDatos</option>
        </select>
      </div>

      <div>
        <p>Temperament Type</p>
        <select onChange={(event)=>{handle_Filter_Temperament(event)}} name="filter_temperament" defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disable>Select Temperament</option>
          <option value="AllTemp" >All Temperaments</option>
          {temperaments.map((temp)=> {
            return temp? (
              <option value={temp.name} key={temp.name}> {temp.name} </option>
            ) : (
              ""
            );
          })}
        </select>
      </div>

    </div>
  );
};

export default FilterBar;
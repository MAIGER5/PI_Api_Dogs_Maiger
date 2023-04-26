import { useEffect, useState } from "react";
import {Validation} from '../index';
import { useDispatch, useSelector } from "react-redux";
import { createRaceDog, getTemperaments } from "../../redux/actions";
// import { unstable_HistoryRouter } from "react-router-dom";


function FormCreateDog() {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getTemperaments())
  }, [dispatch])
  
  const temperaments = useSelector((state)=> state.temperamentsBD)




  const [data, setData] = useState({
    name: "",
		temperament: [],
		life_span: "",
		weightMin: "",
		weightMax: "",
		heightMin: "",
		heightMax: "",
		reference_image_id: ""
  })

  const [errors, setErrors] = useState({
    name: "",
		temperament: [],
		life_span: "",
		weightMin: "",
		weightMax: "",
		heightMin: "",
		heightMax: "",
		reference_image_id: ""
  })

  const handleSubmit = (event) => {
    // event.preventDefault();

    if(
      !errors.name &&
      !errors.temperament &&
      !errors.life_span &&
      !errors.weightMin &&
      !errors.weightMax &&
      !errors.heightMin &&
      !errors.heightMax &&
      !errors.reference_image_id
    ) {
      alert('breed successfully created');
      dispatch(createRaceDog(data));
      setData({
        name: "",
        temperament: [],
        life_span: "",
        weightMin: "",
        weightMax: "",
        heightMin: "",
        heightMax: "",
        reference_image_id: ""
      })
    } else {
      return alert ('There were errors in the information entered, try again')
    }
    // history.push("/home");
  } 

  const handleInputChange = (event)=> {
    event.preventDefault();
    const property = event.target.name;
    const value = event.target.value

    setData({...data, [property]: value})
    Validation({...data, [property]: value}, errors, setErrors)
  }

  const  handleTemp = (event) => {
    setData({
      ...data,
      temperament: [...data.temperament, event.target.value],
    });
  }

  return (
    <div>
      <form onSubmit={(event)=> handleSubmit(data)}>

        <div>
          <label htmlFor="name">Breed name</label>
          <input 
            type="text"
            name="name"
            value={data.name}
            onChange={handleInputChange}
          />
          <p> {errors.name} </p>
        </div>

        <div>
        <label htmlFor="life_span">Temperament</label>
          <select onChange={(event)=> handleTemp(event)} name="select temperament" defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>Select temperament</option>
            <option value="AllTemp" >All Temperaments</option>
            {
              temperaments.map((temp, index)=> {
                return (
                  <option value={index + 1}>{temp.name}</option>
                )
              })
            }
          </select>
        </div>


        <div>
          <label htmlFor="life_span">Life_span</label>
          <input 
            type="text"
            name="life_span"
            value={data.life_span}
            onChange={handleInputChange}
          />
          <p> {errors.life_span} </p>
        </div>

        <div>
          <label htmlFor="weightMin">Weight Min</label>
          <input 
            type="text"
            name="weightMin"
            value={data.weightMin}
            onChange={handleInputChange}
          />
          <p> {errors.weightMin} </p>
        </div>

        <div>
          <label htmlFor="weightMax">Weight Max</label>
          <input 
            type="text"
            name="weightMax"
            value={data.weightMax}
            onChange={handleInputChange}
          />
          <p> {errors.weightMax} </p>
        </div>

        <div>
          <label htmlFor="heightMin">Height Min</label>
          <input 
            type="text"
            name="heightMin"
            value={data.heightMin}
            onChange={handleInputChange}
          />
          <p> {errors.heightMin} </p>
        </div>

        <div>
          <label htmlFor="heightMax">Height Max</label>
          <input 
            type="text"
            name="heightMax"
            value={data.heightMax}
            onChange={handleInputChange}
          />
          <p> {errors.heightMax} </p>
        </div>

        <div>
          <label htmlFor="reference_image_id">Reference Image</label>
          <input 
            type="text"
            name="reference_image_id"
            value={data.reference_image_id}
            onChange={handleInputChange}
          />
          <p> {errors.reference_image_id} </p>
        </div>

        <div>
          <button type="submit">
            Create dog breed
          </button>
        </div>

      </form>

    </div>
  );
};

export default FormCreateDog;
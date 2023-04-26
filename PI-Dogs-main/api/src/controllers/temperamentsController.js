require('dotenv').config();
const {Dog, Temperament} = require('../db');
const axios = require('axios');
const {TheDogApi, API_KEY} = process.env;


const getAllTemperaments = async () => {

    const infoApi = (await axios.get(`${TheDogApi}?key=${API_KEY}`)).data;
    const temperamentosApi = infoApi.map((temp)=> temp.temperament); // tenemos toda la informacion de cada perro pero solo necesitamos el temperamento esto arma un array con todos temperamentos de cada perro
    const tor = temperamentosApi.filter((ele)=> ele != null) //tenemos un array de arrays que continen elementos null, debemos eliminarlos para gestionar la informacion

    const urt = tor.map((ele1)=> ele1.split(" ")) // tenemos array de muchos array, pero cada array contiene un string de muchas palabras que debemos separar como un string independente para poder filtrar o buscar duplicados para eso demos hacer esto para luego concatenarlos y armar un solo array de esta forma sera mas facil buscar los duplicados
    let arraytemper = [];

    for (let i = 0; i < urt.length; i++) {
        arraytemper = arraytemper.concat(urt[i])   //Tenemos un muchos arrays dentro de un array, con esto los concatenamos o unimos en un solo array
    }

    const result = arraytemper.reduce((acc, item)=> { // aqui ya tenemos el array de string y con este metodo eliminamos duplicados
        if(!acc.includes(item)) {
            acc.push(item);
        }
        return acc
    }, [])

    
    const resultOnject = result.map((ele2)=> {
        return {
          name: ele2.replace(",", "").replace(/\s/g, ""),
        }
      })
    
    await Temperament.bulkCreate(resultOnject)
        .then(()=>console.log('Los Tempramentos han sido Salvados en la Base de Datos'))


    return [...resultOnject];
}



const getAllTempBdController = async () => {

    const tempsBd = await Temperament.findAll({attributes: ['name']}); 

    return [...tempsBd];
}


module.exports = {
    getAllTemperaments,
    getAllTempBdController,

}
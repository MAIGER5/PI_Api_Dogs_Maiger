require('dotenv').config();
const {Dog} = require('../db') //el Dog aqui puesto se refiere al modelo Dog definido en el DogModels
const axios = require('axios')
const {TheDogApi, API_KEY} = process.env;

const dogsCleaner = (array) => {
    return array.map((arr) => {
        return {
            name: arr.name,
            created: false,
        };
    });
};

const getAllDogsControler = async () => {

    const dogsBd = await Dog.findAll({attributes: ['name', 'created']}); //llamar los perros en la base de datos
    const infoApi = await axios.get(`${TheDogApi}?key=${API_KEY}`);  //buscar los perros en la Api

    const dogsApi = dogsCleaner(infoApi.data);
    // const dogsBd = dogsCleaner(infoBd);

    return [...dogsBd, ...dogsApi];
}

const createDogController = async (image, name, breed_group, height, weight, life_span)=> {
    return await Dog.create({image, name, breed_group, height, weight, life_span});  // estos son los atributos o columnas definidas en el modelo Dog
}

const getDogByIdController = async (idRaza, source)=> {

    const dog = 
        source === "api" ? (await axios.get(`${TheDogApi}/${idRaza}?key=${API_KEY}`))
            .data
        : await Dog.findByPk(idRaza);
    return dog;
}

const getDogByNameController = async(name) => {

    const dogsRaceBd = await Dog.findAll({where: {name: name}}); //llamar los perros en la base de datos
    const infoApi = (await axios.get(`${TheDogApi}?key=${API_KEY}`)).data;  //buscar los perros en la Api
    
    const razas = dogsCleaner(infoApi)
    const dogsRaceApi = razas.filter((ele1)=> ele1.name.toLowerCase().includes(name.toLowerCase()));

    if (!dogsRaceBd.length && !dogsRaceApi.length) throw new Error('No existe el nombre de la raza que esta buscando');
    return [...dogsRaceBd, ...dogsRaceApi];
    
}

module.exports = {
    createDogController,
    getDogByIdController,
    getAllDogsControler,
    getDogByNameController  //exporto de manera destructring porque voy a crear mas de una funcion controller
};
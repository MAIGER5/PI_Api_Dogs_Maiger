
require('dotenv').config();
const {Dog, Temperament} = require('../db') //el Dog aqui puesto se refiere al modelo Dog definido en el DogModels
const axios = require('axios')
const {TheDogApi, API_KEY} = process.env;

const dogsCleaner = (array) => {
    return array.map((arr) => {
        return {

            id: arr.id,
            name: arr.name,
            temperament: arr.temperament? arr.temperament.replace(",", "").replace(/\s/g, "").split(",") : "temCreado",
            life_span: arr.life_span,
            weightMin: Array.from(arr.weight.metric).shift(),
            weightMax: Array.from(arr.weight.metric).pop(),
            heightMin: Array.from(arr.height.metric).shift(),
            heightMax: Array.from(arr.height.metric).pop(),
            reference_image_id: arr.reference_image_id,
            created: false,
        };
    });
};

const getAllDogsControler = async () => {

    const dogsBd = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        }
    }); //llamar los perros en la base de datos
    const infoApi = await axios.get(`${TheDogApi}?key=${API_KEY}`);  //buscar los perros en la Api

    const dogsApi = dogsCleaner(infoApi.data);
    // const dogsBd = dogsCleaner(infoBd);

    return [...dogsApi, ...dogsBd];
}

const getDogByNameController = async(name) => {

    const dogsRaceBd = await Dog.findAll({where: {name: name}}); //llamar los perros en la base de datos
    const infoApi = (await axios.get(`${TheDogApi}?key=${API_KEY}`)).data;  //buscar los perros en la Api
    
    const razas = dogsCleaner(infoApi)
    const dogsRaceApi = razas.filter((ele1)=> ele1.name.toLowerCase().includes(name.toLowerCase()));

    if (!dogsRaceBd.length && !dogsRaceApi.length) throw new Error('No existe el nombre de la raza que esta buscando');
    return [...dogsRaceBd, ...dogsRaceApi];
}

const createDogController = async (name, temperament, life_span, weightMin, weightMax, heightMin, heightMax, reference_image_id, created)=> {
    const dogNew = await Dog.create({name, life_span, weightMin, weightMax, heightMin, heightMax, reference_image_id, created});  // estos son los atributos o columnas definidas en el modelo Dog

    await dogNew.addTemperaments(temperament)
}

const getDogByIdController = async (idRaza, source)=> {

    // guardamos la info de la api para maperarla 
    // const info = (await axios.get(`${TheDogApi}/${idRaza}?key=${API_KEY}`)).data

    // dogId.push(info);
 
    // const dogDetail = dogsCleaner(dogId);
//-------------------------------------------------

    // guardo la info de la base de datos para qe no se mapee con la funcion dogsCleaner
    const bdId = [];
    const apiId = [];
    
    if (source === 'bdd') {
        bdId.push(await Dog.findByPk(idRaza))
        return bdId;
    } else {
        apiId.push((await axios.get(`${TheDogApi}/${idRaza}?key=${API_KEY}`)).data)
        const apiInfo = dogsCleaner(apiId)
        return apiInfo
    }
}



module.exports = {
    createDogController,
    getDogByIdController,
    getAllDogsControler,
    getDogByNameController  //exporto de manera destructring porque voy a crear mas de una funcion controller
};
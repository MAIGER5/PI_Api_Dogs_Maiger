const {Dog} = require('../db') //el Dog aqui puesto se refiere al modelo Dog definido en el DogModels

const createDogController = async (image, name, breed_group, height, weight, life_span)=> {
    return await Dog.create({image, name, breed_group, height, weight, life_span});  // estos son los atributos o columnas definidas en el modelo Dog
}

module.exports = {
    createDogController,  //exporto de manera destructring porque voy a crear mas de una funcion controller
};
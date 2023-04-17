const { json } = require("sequelize");
const { createDogController, getDogByIdController, getAllDogsControler, getDogByNameController} = require("../controllers/createDogController");

const getDogsH = async(req, res)=> {
    const {name} = req.query;

    try {
        if (name) {
            const dogsByName = await getDogByNameController(name);
            res.status(200).json(dogsByName);
        } else {
            const response = await getAllDogsControler();
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    // Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro
};

const getDetailH = async (req, res)=> {
    const {idRaza} = req.params;
    const source = isNaN(idRaza) ? "bdd" : "api";

    try {
        const response = await getDogByIdController(idRaza, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

    // -Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
    // -La raza es recibida por parámetro (ID).
    // -Tiene que incluir los datos de los temperamentos asociadas a esta raza.
    // -Debe funcionar tanto para los perros de la API como para los de la base de datos
};

// const getByRaceH = async (req, res)=> {

//     const {name} = req.query;

//     try {
//         if (name) {
//             const dogByName = await getDogByName(name);
//             res.status(200).json(dogByName)
//         }
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
//     // -Esta ruta debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
//     // -Debe poder buscarlo independientemente de mayúsculas o minúsculas.
//     // -Si no existe la raza, debe mostrar un mensaje adecuado.
//     // -Debe buscar tanto los de la API como los de la base de datos

// };

const createDogsH = async (req, res)=> {
    const {image, name, breed_group, height, weight, life_span} = req.body;
    try {
        const response = await createDogController(image, name, breed_group, height, weight, life_span);
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({error:error.message})    
    }
    // -Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
    // -Toda la información debe ser recibida por body.
    // -Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados al menos uno`
};

module.exports = {
    getDogsH,
    getDetailH,
    // getByRaceH,
    createDogsH
}
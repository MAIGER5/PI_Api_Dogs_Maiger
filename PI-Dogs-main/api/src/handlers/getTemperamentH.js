const { json } = require("sequelize");
const {getAllTemperaments} = require('../controllers/temperamentsController');

const getTemperamentH = async (req, res)=> {

    try {
        const response = await getAllTemperaments();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    // Obtiene todos los temperamentos existentes -Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo- Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí

};

module.exports = getTemperamentH;
const { json } = require("sequelize");
const { getAllTempBdController } = require("../controllers/temperamentsController");


const getTemperamentBdH = async (req, res)=> {

    try {
        const response = await getAllTempBdController();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

};


module.exports = getTemperamentBdH;
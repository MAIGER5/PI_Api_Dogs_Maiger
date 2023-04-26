const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('Temperament', {  // Siempre debe definirse en SINGULAR, la base datos finalmente crea la tabla den PLURAL

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, 

  {
    timestamps: false
  }
  );
};

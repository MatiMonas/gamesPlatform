const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define("videogame", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        background_image: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:
                "https://www.muycomputer.com/wp-content/uploads/2016/06/Nintendo-64.jpg",
        },

        releaseDate: {
            type: DataTypes.STRING,
            validate: {
                isDate: true,
            },
        },

        rating: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5,
            },
            allowNull: true,
        },

        platforms: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
        },
    });
};

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("gameGenre", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },

        name: {
            type: DataTypes.STRING,
        },
    });
};

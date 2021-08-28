const { DataTypes } = require('sequelize');

module.export = (sequelize) => {
  sequelize.define('gameGenre', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
    },
  });
};

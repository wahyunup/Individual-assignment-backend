'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usermaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  usermaterial.init({
    userid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    materialid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'usermaterial',
  });
  return usermaterial;
};
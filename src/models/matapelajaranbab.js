'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matapelajaranbab extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matapelajaranbab.init({
    matapelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    babid:{
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'matapelajaranbab',
  });
  return matapelajaranbab;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelasmodepembelajaranmatapelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelasmodepembelajaranmatapelajaran.init({
    kelasid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    modepembelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    matapelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'kelasmodepembelajaranmatapelajaran',
  });
  return kelasmodepembelajaranmatapelajaran;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelasmodepembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kelasmodepembelajaran.init({
    modepembelajaranid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    kelasid: {
      primaryKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'kelasmodepembelajaran',
  });
  return kelasmodepembelajaran;
};
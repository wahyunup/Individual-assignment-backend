'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matapelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      matapelajaran.belongsToMany(models.bab, {through: models.matapelajaranbab,foreignKey: "matapelajaranid"})
      matapelajaran.belongsToMany(models.kelas, {through: models.kelasmodepembelajaranmatapelajaran, foreignKey: "matapelajaranid"})
      matapelajaran.belongsToMany(models.modepembelajaran, {through: models.kelasmodepembelajaranmatapelajaran, foreignKey: "matapelajaranid"})
    }
  }
  matapelajaran.init({
    matapelajaranid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'matapelajaran',
  });
  return matapelajaran;
};
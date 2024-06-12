'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modepembelajaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      modepembelajaran.belongsToMany(models.kelas, {through: models.kelasmodepembelajaran,foreignKey: "modepembelajaranid"})
      modepembelajaran.belongsToMany(models.matapelajaran, {through: models.kelasmodepembelajaranmatapelajaran, foreignKey: "modepembelajaranid"})
    }
  }
  modepembelajaran.init({
    modepembelajaranid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'modepembelajaran',
  });
  return modepembelajaran;
};
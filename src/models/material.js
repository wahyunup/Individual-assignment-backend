'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      material.belongsToMany(models.user, { through: models.usermaterial, foreignKey:"materialid"})
      material.belongsToMany(models.subbab, {through: models.subbabmaterial, foreignKey:"materialid"})
    }
  }
  material.init({
    materialid:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'material',
  });
  return material;
};
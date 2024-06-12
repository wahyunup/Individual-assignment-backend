'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsToMany(models.bab, {through: models.userbab, foreignKey: "userid"})
      user.belongsToMany(models.subbab, {through: models.usersubbab, foreignKey: "userid"})
      user.belongsToMany(models.material, {through: models.usermaterial, foreignKey: "userid"})
    }
  }
  user.init({
    userid:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    } ,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'user',
  });
  return user;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USER extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      USER.hasMany(models.TASKS, { as: "tasks", foreignKey: 'user_id' });
    }
  }
  USER.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    user: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USER',
    tableName: 'USERs', 
  });
  return USER;
};
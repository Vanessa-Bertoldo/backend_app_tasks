'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TASKS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TASKS.belongsTo(models.USER, { as:"user", foreignKey: 'user_id' });
    }
  }
  TASKS.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER,
    date_initial: DataTypes.DATE,
    date_final: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TASKS',
    tableName: 'TASKS'
  });
  return TASKS;
};

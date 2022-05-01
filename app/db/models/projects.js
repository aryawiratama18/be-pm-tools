'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Projects.belongsTo(models.Categories);
      models.Categories.hasMany(Projects)
      // Projects.belongsToMany(models.ProjectOwners);
      // Projects.belongsToMany(models.Members);
    }
  }
  Projects.init({
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    capex_budget : DataTypes.BIGINT,
    opex_budget : DataTypes.BIGINT,
    capex_real : DataTypes.BIGINT,
    opex_real : DataTypes.BIGINT,
    start_exec_plan : DataTypes.DATEONLY,
    finish_exec_plan : DataTypes.DATEONLY,
    start_exec_real : DataTypes.DATEONLY,
    finish_exec_plan : DataTypes.DATEONLY,
    status : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};
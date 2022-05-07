'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectOwner.belongsTo(models.Project, {foreignKey: 'projectId', targetKey: 'id'});
      ProjectOwner.belongsTo(models.Owner, {foreignKey: 'ownerId', targetKey: 'id'});
    }
  }
  ProjectOwner.init({
    projectId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectOwner',
  });
  return ProjectOwner;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProjectMember.belongsTo(models.Project, {foreignKey: 'projectId', targetKey: 'id'});
      ProjectMember.belongsTo(models.Member, {foreignKey: 'memberId', targetKey: 'id'});
      
    }
  }
  ProjectMember.init({
    projectId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectMember',
  });
  return ProjectMember;
};
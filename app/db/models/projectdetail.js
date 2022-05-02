'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProjectDetail.init({
    ProjectId: DataTypes.INTEGER,
    MemberId: DataTypes.INTEGER,
    ProjectOwnerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectDetail',
  });
  return ProjectDetail;
};
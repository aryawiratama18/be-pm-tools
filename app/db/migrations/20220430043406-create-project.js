'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      capex_budget: {
        type: Sequelize.BIGINT
      },
      opex_budget: {
        type: Sequelize.BIGINT
      },
      capex_real: {
        type: Sequelize.BIGINT
      },
      opex_real: {
        type: Sequelize.BIGINT
      },
      start_exec_plan : {
        type: Sequelize.DATEONLY
      },
      finish_exec_plan : {
        type: Sequelize.DATEONLY
      },
      start_exec_real : {
        type: Sequelize.DATEONLY
      },
      finish_exec_real : {
        type: Sequelize.DATEONLY
      },
      status : {
        type : Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};
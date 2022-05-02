'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        }
      },
      MemberId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Members',
          key: 'id'
        }
      },
      ProjectOwnerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProjectOwners',
          key: 'id'
        }
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
    await queryInterface.dropTable('ProjectDetails');
  }
};
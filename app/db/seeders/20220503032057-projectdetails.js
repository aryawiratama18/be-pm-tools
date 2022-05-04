'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ProjectDetails', [
        {
          ProjectId: 1,
          MemberId: 1,
          ProjectOwnerId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProjectId: 1,
          MemberId: 2,
          ProjectOwnerId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProjectId: 1,
          MemberId: 3,
          ProjectOwnerId: 2,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProjectId: 2,
          MemberId: 2,
          ProjectOwnerId: 1,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          ProjectId: 2,
          MemberId: 3,
          ProjectOwnerId: 2,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('ProjectDetails', null, {});
  }
};

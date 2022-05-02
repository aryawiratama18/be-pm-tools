'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Roles', [
       {
        name: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'lead',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'member',
        createdAt: new Date(),
        updatedAt: new Date()
       },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Roles', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Roles', [
       {
        name: 'Administrator',
       },
       {
        name: 'Lead',
       },
       {
        name: 'Member',
       },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Roles', null, {});
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Members', [
       {
        firstName: 'Jonathan',
        lastName : 'Lambert',
        role : 'administrator',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Dominic',
        lastName : 'Toretto',
        role : 'member',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        firstName: 'Rodrigo',
        lastName : 'Antonio',
        role : 'lead',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
  await queryInterface.bulkDelete('Members', null, {});

  }
};

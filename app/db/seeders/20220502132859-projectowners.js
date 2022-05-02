'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ProjectOwners', [
      {
        name: 'Divisi Komersial',
        description: ''
      },
      {
        name: 'Divisi Keuangan',
        description: ''
      },
      {
        name: 'Divisi Hukum',
        description: ''
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ProjectOwners', null, {});
    
  }
};

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('ProjectOwners', [
      {
        name: 'Divisi Komersial',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Divisi Keuangan',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Divisi Hukum',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('ProjectOwners', null, {});
    
  }
};

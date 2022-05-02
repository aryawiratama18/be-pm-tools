'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.bulkInsert('Cats', [
        {
          name: 'Pengembangan Aplikasi',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pengembangan Dashboard',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pengembangan Infrastruktur',
          description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});

  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('Cats', null, {});
 
  }
};

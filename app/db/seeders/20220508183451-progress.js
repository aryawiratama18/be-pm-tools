'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Progresses', [
      {
        month: 1,
        target: true,
        realization : false,
        value: 20,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 2,
        target: true,
        realization : false,
        value: 40,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 3,
        target: true,
        realization : false,
        value: 60,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 1,
        target: false,
        realization : true,
        value: 15,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 2,
        target: false,
        realization : true,
        value: 30,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 3,
        target: false,
        realization : true,
        value: 75,
        ProjectId : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});

  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Progresses', null, {});
 
  }
};

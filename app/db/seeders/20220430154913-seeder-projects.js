'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Projects', [
        {
          name: 'Aplikasi Ferizy',
          categoryId: 1,
          description: 'Untuk booking tiket ferry secara online',
          capex_budget: '250000000',
          opex_budget: '100000000',
          capex_real : '220000000',
          opex_real: '85000000',
          start_exec_plan: new Date(2022,0,25),
          finish_exec_plan: new Date(2022,5,1),
          start_exec_real: new Date(2022,4,10),
          finish_exec_real: new Date(2022,9,5),
          status: 'on progress',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Container Platform',
          categoryId: 3,
          description: 'Platform untuk container orchestrator',
          capex_budget: '1500000000',
          opex_budget: '175000000',
          capex_real : '200000000',
          opex_real: '100000000',
          start_exec_plan: new Date(2022,0,25),
          finish_exec_plan: new Date(2022,5,1),
          start_exec_real: new Date(2022,4,10),
          finish_exec_real: new Date(2022,9,5),
          status: 'on progress',
          createdAt: new Date(),
          updatedAt: new Date()
        },
    ], {});

  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Projects', null, {});
 
  }
};

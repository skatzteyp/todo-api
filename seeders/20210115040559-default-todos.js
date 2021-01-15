'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: 'Take a bath',
          description: 'Take a bath in the bathroom'
        },
        {
          title: 'Eat breakfast',
          description: 'Eat some delicious bread and egg'
        },
        {
          title: 'Go to work',
          description: 'Be sure not to be late'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

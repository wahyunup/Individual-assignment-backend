'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userbabs', {
      userid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      babid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      progress: {
        type: Sequelize.DECIMAL(5,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userbabs');
  }
};
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelasmodepembelajaranmatapelajarans', {
      kelasid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modepembelajaranid: {
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      matapelajaranid: {
        primaryKey: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('kelasmodepembelajaranmatapelajarans');
  }
};
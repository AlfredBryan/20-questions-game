"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable("Games", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      },
      status: {
        type: Sequelize.ENUM,
        allowNull: false
      },
      word: {
        type: Sequelize.STRING,
        allowNull: false
      },
      creatorId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id"
        }
      },
      guesserId: {
        type: Sequelize.UUID,
        references: {
          model: "Users",
          key: "id"
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        required: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        required: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

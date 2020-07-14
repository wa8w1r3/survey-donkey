'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      { id: 1, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "ds" },
      { id: 2, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "dsaf" },
      { id: 3, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "dsaf" },
      { id: 4, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "dsf" },
      { id: 5, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "dfadsf" },
      { id: 6, createdAt: new Date(), updatedAt: new Date(), lastLogin: new Date(), email: "d", role: "s", hashedPassword: "a", firstname: "dasf" }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        username: 'djfkjdkfj',
        email: '4@gmail.com',
        password: '$2b$10$XtivcjNw/XP2YtKGVDjYfutFKGzteGl6NrGFYrwuTLqfvr9MHp5Di',
        role: 'ADMIN',
        createdAt: new Date('2025-11-17 10:44:43'),
        updatedAt: new Date('2025-11-17 10:44:43')
      },
      {
        id: 3,
        username: 'djfkjdkfj',
        email: 's@gmail.com',
        password: '$2b$10$XtivcjNw/XP2YtKGVDjYfutFKGzteGl6NrGFYrwuTLqfvr9MHp5Di',
        role: 'ADMIN',
        createdAt: new Date('2025-11-17 10:45:00'),
        updatedAt: new Date('2025-11-17 10:45:00')
      },
      {
        id: 4,
        username: 'djfkjdkfj',
        email: '5@gmail.com',
        password: '$2b$10$XtivcjNw/XP2YtKGVDjYfutFKGzteGl6NrGFYrwuTLqfvr9MHp5Di',
        role: 'ADMIN',
        createdAt: new Date('2025-11-17 10:45:08'),
        updatedAt: new Date('2025-11-17 10:45:08')
      },
      {
        id: 9,
        username: 'djfkjdkfj',
        email: '6@gmail.com',
        password: '$2b$10$VLGZfXL7V44XJLoRdCblGekX1F7hCYITg9yX7NhTO9i3HmBaBnSye',
        role: 'ADMIN',
        createdAt: new Date('2025-11-17 11:52:43'),
        updatedAt: new Date('2025-11-17 11:52:43')
      },
      {
        id: 10,
        username: null,
        email: 'sas@gmail.com',
        password: '$2b$10$Lo7F6Tmg818a15re96eAfOhn75VQnW8cyyjJQXHxt89yWamWq3Ih6',
        role: 'CUSTOMER',
        createdAt: new Date('2025-11-17 17:32:01'),
        updatedAt: new Date('2025-11-17 17:32:01')
      },
      {
        id: 12,
        username: null,
        email: 'sads@gmail.com',
        password: '$2b$10$VEY.RFIFQQctFm6RxI.TLumdtZ4FW0T8tSsZAOdqnb3iIaE8.fq52',
        role: 'CUSTOMER',
        createdAt: new Date('2025-11-18 04:35:00'),
        updatedAt: new Date('2025-11-18 04:35:00')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
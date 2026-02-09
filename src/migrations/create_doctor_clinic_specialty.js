'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 
  async up(queryInterface, Sequelize) {
    //add column
    await queryInterface.createTable('Doctors_Clinics_Specialties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.STRING
      },
      clinicId: {
        type: Sequelize.STRING
      },
      specialtyId: {
        type: Sequelize.STRING
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctors_Clinics_Specialties');
  }
};
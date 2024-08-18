
const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../config/database');

const RequestForm = sequelize.define('RequestForm', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  },
  reg_num: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  esim_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  student_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  department: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semester: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = RequestForm;

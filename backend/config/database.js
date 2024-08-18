
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodue', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;

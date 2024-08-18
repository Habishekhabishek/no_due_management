const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('nodue', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const User = require('./user')(sequelize, Sequelize);

module.exports = { sequelize, User };

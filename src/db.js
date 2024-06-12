const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'ekoeduca',
    'postgres',
    'accountfy', {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = sequelize;
const Sequelize = require('sequelize');
const database = require('../db');

const Curso = database.define('cursos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    instrutor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at'
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    }
});

module.exports = Curso;
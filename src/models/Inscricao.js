const Sequelize = require('sequelize');
const database = require('../db');
const Usuario = require('./usuario');
const Curso = require('./cursos');

const Inscricao = database.define('inscricoes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Usuario,
            key: 'id',
        }
    },
    curso_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Curso,
            key: 'id',
        }
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

module.exports = Inscricao;
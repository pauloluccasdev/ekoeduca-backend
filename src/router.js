const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const CursoController = require('./controllers/CursoController');

const routes = express.Router();

routes.post('/login', UsuarioController.login);

routes.post('/usuario/registro', UsuarioController.create);

routes.post('/cursos/registro', CursoController.create);

module.exports = routes;
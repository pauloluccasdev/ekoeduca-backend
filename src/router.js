const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const CursoController = require('./controllers/CursoController');
const InscricaoController = require('./controllers/InscricaoController');

const routes = express.Router();

routes.post('/login', UsuarioController.login);

routes.post('/usuario/registro', UsuarioController.create);

routes.post('/cursos/registro', CursoController.create);
routes.get('/cursos', CursoController.findAll);
routes.get('/cursos/:id', CursoController.findById);

routes.get('/inscrever', InscricaoController.create);

module.exports = routes;
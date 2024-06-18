const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const CursoController = require('./controllers/CursoController');
const InscricaoController = require('./controllers/InscricaoController');
const authMiddleware = require('./middleware/middleware');

const routes = express.Router();

routes.post('/login', UsuarioController.login);

routes.post('/usuario/registro', authMiddleware, UsuarioController.create);

routes.post('/cursos/registro', authMiddleware, CursoController.create);
routes.get('/cursos', authMiddleware, CursoController.findAll);
routes.get('/cursos/:id', authMiddleware, CursoController.findById);

routes.get('/inscrever', authMiddleware, InscricaoController.create);

module.exports = routes;
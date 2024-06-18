const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.post('/usuario/registro', UsuarioController.create);

routes.post('/login', UsuarioController.login);

module.exports = routes;
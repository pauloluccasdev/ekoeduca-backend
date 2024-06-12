const Usuario = require("../models/usuario");

module.exports = {
    async create(req, res) {
        const {nome, email, senha} = req.body;
        try {
            const usuario = await Usuario.create({nome, email, senha});
            return res.json(usuario);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
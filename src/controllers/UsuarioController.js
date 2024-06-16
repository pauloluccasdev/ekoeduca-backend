const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

module.exports = {
    async create(req, res) {
        try {
            const {nome, email, senha} = req.body;
            const senhaHash = await bcrypt.hash(senha, 10);
            const usuario = await Usuario.create({nome, email, senha: senhaHash});
            return res.json(usuario);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
};
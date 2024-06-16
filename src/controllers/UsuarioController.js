const Usuario = require("../models/usuario");
const bcrypt = require("bcrypt");

module.exports = {



    async create(req, res) {

        try {
            const {nome, email, senha} = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).send({ errors: 'Valores ausentes.' });
            }

            const senhaHash = await bcrypt.hash(senha, 10);
            Usuario.create({nome, email, senha: senhaHash});

            return res.json('Usuário registrado com sucesso.');
        } catch (error) {

            return res.status(500).send(error);
        }
    }
};
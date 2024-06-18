const sendWelcomeEmail = require("../mails/nodemailer");
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

            await sendWelcomeEmail(email, nome);                

            return res.json('Usuário registrado com sucesso.');
        } catch (error) {

            return res.status(500).send(error);
        }
    },

    async login(req, res) {
        
        try {
            const {email, senha} = req.body;
            if (!email || !senha) {
                return res.status(400).send({ errors: 'Valores ausentes.' });
            }

            const usuario = await Usuario.findOne({ where: { email } });
            if (!usuario) {
                return res.status(404).send({ error: 'Usuário não encontrado.' });
            }
            
            return res.json({email, senha});
            
        } catch (error) {
            
            return error;
        }
    }
};
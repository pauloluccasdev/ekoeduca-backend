const { where } = require("sequelize");
const Inscricao = require("../models/Inscricao");
const { verifyToken } = require('../utils/jwt');

module.exports = {

    async create(req, res) {

        try {

            const {curso_id} = req.body;
            const usuario = verifyToken(req.headers.authorization?.split(' ')[1]);
            const usuario_id = usuario.id;
            
            const inscricaoExistente = await Inscricao.findOne({ where: { usuario_id, curso_id }});

            if(inscricaoExistente) {
                return res.status(400).json({ error: 'Usuário já possui inscrição há esse curso' });
            }

            const novaInscricao = await Inscricao.create({ usuario_id, curso_id });
            return res.status(201).json(novaInscricao);

        } catch (error) {

            return res.status(500).send(error);
        }
    },
};
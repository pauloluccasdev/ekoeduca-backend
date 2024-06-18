const { where } = require("sequelize");
const Inscricao = require("../models/Inscricao");

module.exports = {

    async create(req, res) {

        try {

            const {usuario_id, curso_id} = req.body;
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
const Curso = require("../models/cursos");

module.exports = {

    async create(req, res) {

        try {
            const { titulo, descricao, instrutor } = req.body;

            if (!titulo || !descricao || !instrutor) {
                return res.status(400).send({ errors: 'Valores ausentes.' });
            }

            Curso.create({titulo, descricao, instrutor});
            return res.json('Curso criado com sucesso.');
        } catch (error) {

            return res.status(500).send(error);
        }
    },

    async findAll(req, res) {

        try {

            const cursos = await Curso.findAll();
            return res.json(cursos);
        } catch (error) {

            return res.status(500).send(error);
        }
    },


    async findById(req, res) {

        try {

            const curso = await Curso.findByPk(req.params.id);

            if (!curso) {
                return res.status(404).json({ error: "Curso não encontrado" });
            }

            return res.json(curso);
        } catch (error) {

            return res.status(500).send(error);
        }
    }
}
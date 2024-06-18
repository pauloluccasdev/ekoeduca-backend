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
    }
}
const Usuario = require('../models/usuario');
const { verifyToken } = require('../utils/jwt');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido.' });
    } 

    try {
        const decoded = verifyToken(token);
        const usuario = await Usuario.findByPk(decoded.id);

        if (!usuario) {
            return res.status(401).json({ error: 'Usuário não encontrado.' });
        }

        req.usuario = usuario;
        next();
    } catch (error) {
        
        return res.status(401).json({ error: 'Token inválido '});
    }
}

module.exports = authMiddleware;
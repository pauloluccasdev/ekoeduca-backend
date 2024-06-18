const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_JWT;

const generateToken = (usuario) => {
    const payload = { id: usuario.id };
    return jwt.sign(payload, secret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    return jwt.verify(token, secret);
};

module.exports = { generateToken, verifyToken };
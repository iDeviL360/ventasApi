import jwt from 'jsonwebtoken';

export function estaAutenticado(req, res, next) {

    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({ message: 'No se ha proveido ningun token' });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.body.usuarioid = decoded.usuarioid;
        next();
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Token no valido'
        });
    };
};
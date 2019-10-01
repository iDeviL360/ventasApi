import Usuario from '../models/Usuario';
import jwt from 'jsonwebtoken';


export async function registrarUsuario(req, res) {
    const { username, email, password } = req.body;

    const usuario = await Usuario.findOne({
        where: {
            email
        }
    });

    if(usuario) {
        return res.status(403).json({
            auth: false,
            message: 'El email que intenta registrar ya existe'
        })
    }


    let nuevoUsuario = Usuario.build({
        username,
        email,
        password
    });

    nuevoUsuario.password = await nuevoUsuario.encriptarPassword(password);
    nuevoUsuario = await nuevoUsuario.save({ fields: ['username', 'email', 'password'] });

    //Generamos el token con jwt, recibe tres paramatros, el primer parametro que recibe es un payload el cual es un identificador del usuario, el segundo parametro que recibe es nuestra llave maestra para que pueda generar los tokens y el tercer parametro son opciones de configuracion del token como caducidad, etc.
    const token = jwt.sign({ usuarioid: nuevoUsuario.usuarioid }, process.env.SECRET_KEY, { expiresIn: 60 * 120 });

    res.json({
        auth: true,
        token
    });
};

export async function loggearUsuario(req, res) {
    const { email, password } = req.body;

    const usuario = await Usuario.findOne({
        where: {
            email: email
        }
    });

    if(!usuario) {
        return res.status(404).json({ message: 'No se ha encontrado ningun usuario con los datos ingresados' });
    }

    //Comparamos la contraseña que nos pasan con la que esta almacenada en la DB y si coincide generamos el token y si no enviamos un error
    const esValido = await usuario.validarPassword(password);

    if(!esValido) {
        return res.status(401).json({ message: 'Los datos ingresados no coinciden' }); 
    }

    //Generar el token
    const token = jwt.sign({ usuarioid: usuario.usuarioid }, process.env.SECRET_KEY, { expiresIn: 60 * 120 });

    res.json({
        auth: true,
        token
    });
};
import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import bcrypt from 'bcryptjs';


const Usuario = sequelize.define('usuario', {
    usuarioid: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    username: {
        type: Sequelize.TEXT,
        required: true
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.TEXT
    }
}, {
    tableName: 'usuario',
    timestamps: false
});

Usuario.prototype.encriptarPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

Usuario.prototype.validarPassword = function(password) {
    return bcrypt.compare(password, this.password);
}


export default Usuario;
import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Cliente from './Cliente';
import Usuario from './Usuario';

const Venta = sequelize.define('venta', {
    ventaid: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    clienteid: {
        type: Sequelize.INTEGER
    },
    total: {
        type: Sequelize.INTEGER
    },
    fecha: {
        type: Sequelize.DATE
    },
    usuarioid: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'venta',
    timestamps: false
})

Venta.hasOne(Cliente, { sourceKey: 'clienteid', foreignKey: 'clienteid' });
Venta.hasOne(Usuario, { sourceKey: 'usuarioid', foreignKey: 'usuarioid' });

export default Venta;
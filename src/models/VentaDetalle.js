import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

import Venta from './Venta';
import Producto from './Producto';

const VentaDetalle = sequelize.define('ventadetalle', {
    ventadetalleid: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    ventaid: {
        type: Sequelize.INTEGER
    },
    productoid: {
        type: Sequelize.INTEGER
    },
    precio: {
        type: Sequelize.INTEGER
    }
}, {
    tableName: 'ventadetalle',
    timestamps: false
});

VentaDetalle.hasMany(Producto, { sourceKey: 'productoid', foreignKey: 'productoid'});
VentaDetalle.belongsTo(Venta, { sourceKey: 'ventaid', foreignKey: 'ventaid' });



export default VentaDetalle;
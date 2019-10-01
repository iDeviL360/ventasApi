import Sequelize from 'sequelize';
import { sequelize } from '../database/database';


const Producto = sequelize.define('producto', {
    productoid: { 
        type: Sequelize.INTEGER, 
        primaryKey: true 
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    precio: {
        type: Sequelize.INTEGER
    },
    codigoproducto: {
        type: Sequelize.TEXT
    }
}, {
    tableName: 'producto',
    timestamps: false
})


export default Producto;
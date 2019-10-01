import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Cliente = sequelize.define('cliente', {
    clienteid: { 
        type: Sequelize.INTEGER, 
        primaryKey: true 
    },
    cedula: { 
        type: Sequelize.INTEGER 
    },
    nombre: { 
        type: Sequelize.TEXT 
    }
}, {
    tableName: 'cliente',
    timestamps: false
});




export default Cliente;
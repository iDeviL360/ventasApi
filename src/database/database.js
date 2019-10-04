import Sequelize from 'sequelize';


//Conexion a la DB se instancia la clase Sequelize y se la pasa la cadena de conexion
export const sequelize = new Sequelize(
    process.env.HEROKU_DB_NAME || 'ventasapp',
    process.env.HEROKU_DB_USER || 'postgres',
    process.env.HEROKU_DB_PASSWORD || 'password',
    {
        host: process.env.HEROKU_DB_HOST || 'localhost',
        dialect: 'postgres',
        dialectOptions: {
            ssl: true
        },
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 1000
        },
        logging: false
    }
);
import Sequelize from 'sequelize';


//Conexion a la DB se instancia la clase Sequelize y se la pasa la cadena de conexion
export const sequelize = new Sequelize(
    process.env.HEROKU_DB_NAME,
    process.env.HEROKU_DB_USER,
    process.env.HEROKU_DB_PASSWORD,
    {
        host: process.env.HEROKU_DB_HOST,
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
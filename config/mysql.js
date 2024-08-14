const { Sequelize  } = require("sequelize");

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host: host,
        dialect: "mysql"
    }
);

const dbConnectMySQL = async () => {
    try {
        await sequelize.authenticate();
        console.log('MYSQL: Conecxión correcta.');
        
    } catch (e) {
        console.log('MYSQL: Error de Conecxión.', e);
    }
}

module.exports = { sequelize, dbConnectMySQL };
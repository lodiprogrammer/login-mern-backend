import { Sequelize } from "sequelize";

const db = new Sequelize('db_multirole', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'hexa_npm_mysql',
    'hexanpmmysql_user',
    'HexaNpmMysqlPass2023', {
        host: 'localhost',
        dialect: 'mysql'
    }
);
  
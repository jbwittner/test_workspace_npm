import { AppLogger } from '@monorepo/domain'
import { Dialect, Sequelize } from 'sequelize'
import { ModelManager } from '../spi/models/ModelManager'

export interface SequelizeConfiguration {
  database: string
  user: string
  password: string
  host: string
  port: number
  dialiect: Dialect
  createdatabase: boolean
  forcecreation: boolean
}

export const sequelizeConfiguration: SequelizeConfiguration = {
  database: 'hexanpmmysql_db',
  user: 'hexanpmmysql_user',
  password: 'HexaNpmMysqlPass2023',
  host: 'localhost',
  port: 3306,
  dialiect: 'mysql',
  createdatabase: false,
  forcecreation: false
}

export const initSequelize = async (appLogger: AppLogger, sequelizeConfiguration: SequelizeConfiguration) => {
  const sequelize = new Sequelize(sequelizeConfiguration.database, sequelizeConfiguration.user, sequelizeConfiguration.password, {
    host: sequelizeConfiguration.host,
    dialect: sequelizeConfiguration.dialiect,
    port: sequelizeConfiguration.port,
    logging: (...msg) => appLogger.info(msg)
  })

  ModelManager(sequelize)

  if (sequelizeConfiguration.createdatabase) {
    await sequelize.sync({ force: sequelizeConfiguration.forcecreation })
    appLogger.info('All models were synchronized successfully.')
  }

  await sequelize.authenticate()
  appLogger.info('Connection has been established successfully.')

  return sequelize
}

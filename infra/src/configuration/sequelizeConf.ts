import { AppLogger } from '@monorepo/domain'
import { Sequelize } from 'sequelize'
import { ModelManager } from '../spi/models/ModelManager'

export const initSequelize = (appLogger: AppLogger) => {
  const sequelize = new Sequelize('hexanpmmysql_db', 'hexanpmmysql_user', 'HexaNpmMysqlPass2023', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (...msg) => appLogger.info(msg)
  })

  ModelManager(sequelize)

  const CREATE_DATABASE = false
  const FORCE_CREATION = true

  if (CREATE_DATABASE) {
    sequelize.sync({ force: FORCE_CREATION }).then(() => {
      appLogger.info('All models were synchronized successfully.')
    })
  }

  return {
    sequelize
  }
}

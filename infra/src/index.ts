import { startExpressServer } from './configuration/expressConf'
import { inject } from './configuration/injection'

export const APPLICATION_PORT = 8080

const { appLogger, sequelize } = inject()

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

sequelize
  .authenticate()
  .then(() => {
    appLogger.info('Connection has been established successfully.')
  })
  .catch(error => {
    appLogger.error('Unable to connect to the database: ' + error)
  })

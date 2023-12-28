import { startExpressServer } from './configuration/expressConf'
import { InjectApplication } from './configuration/injection'
import { initSequelize, sequelizeConfiguration } from './configuration/sequelizeConf'

export const APPLICATION_PORT = 8080

const { appLogger } = InjectApplication()

//Init sequelize
initSequelize(appLogger, sequelizeConfiguration)

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

import { startExpressServer } from './configuration/expressConf'
import { appLogger } from './configuration/injection'

export const APPLICATION_PORT = 8080

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

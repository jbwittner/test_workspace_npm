import { startExpressServer } from './configuration/expressConf'
import { inject } from './configuration/injection'

export const APPLICATION_PORT = 8080

const { appLogger } = inject()

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

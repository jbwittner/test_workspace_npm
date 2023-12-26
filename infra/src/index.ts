import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { initControllerAndInject, startExpressServer } from './configuration/expressConf'
import { LoggerImpl } from './tools/Logger'
import { UserSpiImpl } from './spi/UserSpiImpl'
import { UserInfraService } from './service/UserInfraService'

export const APPLICATION_PORT = 8080

//Injections
const appLogger: AppLogger = new LoggerImpl()
const userSpi: UserSpi = new UserSpiImpl()
const userApi: UserApi = new UserDomainService(userSpi)
const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
initControllerAndInject(appLogger, userInfraService)

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

import { AppLogger, GroupSpi, UserGroupSpi, UserSpi } from '@monorepo/domain'
import { initControllerAndInject, startExpressServer } from './configuration/expressConf'
import { initSequelize, sequelizeConfiguration } from './configuration/sequelizeConf'
import { LoggerImpl } from './tools/Logger'
import { UserSpiImpl } from './spi/UserSpiImpl'
import { UserInfraService } from './service/UserInfraService'
import { GroupInfraService } from './service/GroupInfraService'
import { GroupSpiImpl } from './spi/GroupSpiImpl'
import { UserGroupSpiImpl } from './spi/UserGroupSpiImpl'

export const APPLICATION_PORT = 8080

const appLogger: AppLogger = new LoggerImpl()

//Init sequelize
initSequelize(appLogger, sequelizeConfiguration)

const userSpi: UserSpi = new UserSpiImpl()
const groupSpi: GroupSpi = new GroupSpiImpl()
const userGroupSpi: UserGroupSpi = new UserGroupSpiImpl()
const userInfraService: UserInfraService = new UserInfraService(appLogger, userSpi)
const groupInfraService: GroupInfraService = new GroupInfraService(appLogger, groupSpi, userSpi, userGroupSpi)
initControllerAndInject(appLogger, userInfraService)

//Start express server
startExpressServer(APPLICATION_PORT, appLogger)

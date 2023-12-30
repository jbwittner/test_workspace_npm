import { AppLogger, GroupSpi, UserGroupSpi, UserSpi } from '@monorepo/domain'
import { initControllerAndInject, startExpressServer } from './configuration/expressConf'
import { LoggerImpl } from './tools/Logger'
import { UserSpiImpl } from './spi/UserSpiImpl'
import { UserInfraService } from './service/UserInfraService'
import { GroupInfraService } from './service/GroupInfraService'
import { GroupSpiImpl } from './spi/GroupSpiImpl'
import { UserGroupSpiImpl } from './spi/UserGroupSpiImpl'
import { AppDataSource } from './configuration/typeOrmConf'

export const APPLICATION_PORT = 8080

const setupApplication = async () => {
  const appLogger: AppLogger = new LoggerImpl()

  //Init sequelize
  await AppDataSource.initialize()

  const userSpi: UserSpi = new UserSpiImpl(AppDataSource)
  const groupSpi: GroupSpi = new GroupSpiImpl(AppDataSource)
  const userGroupSpi: UserGroupSpi = new UserGroupSpiImpl()
  const userInfraService: UserInfraService = new UserInfraService(appLogger, userSpi)
  const groupInfraService: GroupInfraService = new GroupInfraService(appLogger, groupSpi, userSpi, userGroupSpi)
  initControllerAndInject(appLogger, userInfraService)

  //Start express server
  startExpressServer(APPLICATION_PORT, appLogger)
}

setupApplication()

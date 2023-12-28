import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { initControllerAndInject } from './expressConf'
import { LoggerImpl } from '../tools/Logger'
import { UserSpiImpl } from '../spi/UserSpiImpl'
import { UserInfraService } from '../service/UserInfraService'
import { initSequelize } from './sequelizeConf'
import { Sequelize } from 'sequelize'

export interface ApplicationContext {
  readonly appLogger: AppLogger
  readonly userSpi: UserSpi
  readonly userApi: UserApi
  readonly userInfraService: UserInfraService
  readonly sequelize: Sequelize
}

export const inject = (): ApplicationContext => {
  const appLogger: AppLogger = new LoggerImpl()
  const { sequelize } = initSequelize(appLogger)
  const userSpi: UserSpi = new UserSpiImpl()
  const userApi: UserApi = new UserDomainService(userSpi)
  const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
  initControllerAndInject(appLogger, userInfraService)

  return {
    appLogger,
    userSpi,
    userApi,
    userInfraService,
    sequelize
  }
}

import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { initControllerAndInject } from './expressConf'
import { LoggerImpl } from '../tools/Logger'
import { UserSpiImpl } from '../spi/UserSpiImpl'
import { UserInfraService } from '../service/UserInfraService'

export interface ApplicationContext {
  readonly appLogger: AppLogger
  readonly userSpi: UserSpi
  readonly userApi: UserApi
  readonly userInfraService: UserInfraService
}

export const InjectApplication = (): ApplicationContext => {
  const appLogger: AppLogger = new LoggerImpl()
  const userSpi: UserSpi = new UserSpiImpl()
  const userApi: UserApi = new UserDomainService(userSpi)
  const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
  initControllerAndInject(appLogger, userInfraService)

  return {
    appLogger,
    userSpi,
    userApi,
    userInfraService,
  }
}

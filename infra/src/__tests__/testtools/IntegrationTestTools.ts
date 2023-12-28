import { initControllerAndInject, startExpressServer } from '../../configuration/expressConf'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { InfraIntegrationFactory } from './InfraIntegrationFactory'
import { faker } from '@faker-js/faker'
import { MySqlContainer, StartedMySqlContainer } from '@testcontainers/mysql'
import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { LoggerImpl } from '../../tools/Logger'
import { initSequelize } from '../../configuration/sequelizeConf'
import { UserInfraService } from '../../service/UserInfraService'
import { UserSpiImpl } from '../../spi/UserSpiImpl'
import { Sequelize } from 'sequelize'

export interface ApplicationContext {
  readonly userSpi: UserSpi
  readonly userApi: UserApi
  readonly userInfraService: UserInfraService
}

export interface ApplicationTestContext {
  readonly injections: ApplicationContext
  readonly startedContainer: StartedMySqlContainer
  readonly server: Server<typeof IncomingMessage, typeof ServerResponse>
  readonly sequelize: Sequelize
  readonly infraIntegrationFactory: ReturnType<typeof InfraIntegrationFactory>
}

export const initInjectionAndStartServer = async (): Promise<ApplicationTestContext> => {
  const mySqlContainer = new MySqlContainer()
  const startedContainer = await mySqlContainer.start()
  console.log('Container started')

  const appLogger: AppLogger = new LoggerImpl()

  const sequelize = await initSequelize(appLogger, {
    database: startedContainer.getDatabase(),
    user: startedContainer.getUsername(),
    password: startedContainer.getUserPassword(),
    host: startedContainer.getHost(),
    port: startedContainer.getPort(),
    dialiect: 'mysql',
    createdatabase: true,
    forcecreation: true
  })

  const userSpi: UserSpi = new UserSpiImpl()
  const userApi: UserApi = new UserDomainService(userSpi)
  const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
  initControllerAndInject(appLogger, userInfraService)

  const server = await startExpressServer(0, appLogger)
  const infraIntegrationFactory = InfraIntegrationFactory(faker, userSpi)
  return {
    injections: {
      userSpi,
      userApi,
      userInfraService
    },
    startedContainer,
    server,
    sequelize,
    infraIntegrationFactory
  }
}

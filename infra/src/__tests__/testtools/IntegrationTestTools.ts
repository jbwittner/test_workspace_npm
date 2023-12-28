import { initControllerAndInject, startExpressServer } from '../../configuration/expressConf'
import { ApplicationContext, InjectApplication } from '../../configuration/injection'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { InfraIntegrationFactory } from './InfraIntegrationFactory'
import { faker } from '@faker-js/faker'
import { MySqlContainer } from '@testcontainers/mysql'
import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { LoggerImpl } from '../../tools/Logger'
import { initSequelize } from '../../configuration/sequelizeConf'
import { UserInfraService } from '../../service/UserInfraService'
import { UserSpiImpl } from '../../spi/UserSpiImpl'
import { Sequelize } from 'sequelize'

export interface ApplicationTestContext {
  readonly injections: ApplicationContext
  readonly server: Server<typeof IncomingMessage, typeof ServerResponse>
  readonly sequelize: Sequelize
  readonly infraIntegrationFactory: ReturnType<typeof InfraIntegrationFactory>
}

export const initInjectionAndStartServer = async (): Promise<ApplicationTestContext> => {

  const mySqlContainer = new MySqlContainer();
  const startedContainer = await mySqlContainer.start()
  console.log("Container started")
  
  const injections = InjectApplication()

  const sequelize = await initSequelize(injections.appLogger, {
    database: startedContainer.getDatabase(),
    user: startedContainer.getUsername(),
    password: startedContainer.getUserPassword(),
    host: startedContainer.getHost(),
    port: startedContainer.getPort(),
    dialiect: 'mysql',
    createdatabase: true,
    forcecreation: true
  })

  const server = await startExpressServer(0, injections.appLogger)
  const infraIntegrationFactory = InfraIntegrationFactory(faker, injections.userSpi)
  return {
    injections,
    server,
    sequelize,
    infraIntegrationFactory
  }
}
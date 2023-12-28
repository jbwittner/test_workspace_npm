import { MySqlContainer, StartedMySqlContainer } from '@testcontainers/mysql'
import { AppLogger, UserApi, UserDomainService, UserSpi } from '@monorepo/domain'
import { LoggerImpl } from '../../tools/Logger'
import { initSequelize } from '../../configuration/sequelizeConf'
import { UserSpiImpl } from '../../spi/UserSpiImpl'
import { Sequelize } from 'sequelize'

export interface SpiApplicationTestContext {
  readonly userSpi: UserSpi
  readonly userApi: UserApi
  readonly startedContainer: StartedMySqlContainer
  readonly sequelize: Sequelize
}

export const SpiInitInjectionAndStartServer = async (): Promise<SpiApplicationTestContext> => {
  const mySqlContainer = new MySqlContainer()
  const startedContainer = await mySqlContainer.start()

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

  return {
    userSpi,
    userApi,
    startedContainer,
    sequelize
  }
}

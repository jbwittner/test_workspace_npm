import { startExpressServer } from '../../configuration/expressConf'
import { ApplicationContext, inject } from '../../configuration/injection'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { InfraIntegrationFactory } from './InfraIntegrationFactory'
import { faker } from '@faker-js/faker'

export interface ApplicationTestContext {
  readonly injections: ApplicationContext
  readonly server: Server<typeof IncomingMessage, typeof ServerResponse>
  readonly infraIntegrationFactory: ReturnType<typeof InfraIntegrationFactory>
}

export const initInjectionAndStartServer = async (): Promise<ApplicationTestContext> => {
  const injections = inject()
  const server = await startExpressServer(0, injections.appLogger)
  const infraIntegrationFactory = InfraIntegrationFactory(faker, injections.userSpi)
  return {
    injections,
    server,
    infraIntegrationFactory
  }
}

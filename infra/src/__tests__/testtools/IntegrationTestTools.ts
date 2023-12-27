import { startExpressServer } from '../../configuration/expressConf'
import { ApplicationContext, inject } from '../../configuration/injection'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { InfraIntegrationFactory } from './InfraIntegrationFactory'
import { faker } from '@faker-js/faker'

export interface ApplicationTestContext {
  injections: ApplicationContext
  server: Server<typeof IncomingMessage, typeof ServerResponse>
  infraIntegrationFactory: ReturnType<typeof InfraIntegrationFactory>
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

import { initControllerAndInject, startExpressServer } from '../../configuration/expressConf'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { AppLogger, User, UserApi } from '@monorepo/domain'
import { LoggerImpl } from '../../tools/Logger'
import { UserInfraService } from '../../service/UserInfraService'

export interface ControllerApplicationTestContext {
  readonly userInfraService: UserInfraService
  readonly server: Server<typeof IncomingMessage, typeof ServerResponse>
}

export const ControllerInitInjectionAndStartServer = async (userApi: UserApi): Promise<ControllerApplicationTestContext> => {
  const appLogger: AppLogger = new LoggerImpl()
  const userInfraService: UserInfraService = new UserInfraService(appLogger, userApi)
  initControllerAndInject(appLogger, userInfraService)
  const server = await startExpressServer(0, appLogger)
  return {
    userInfraService,
    server
  }
}

export class MockUserApiFactory {
  mockUserSpi: jest.Mocked<UserApi> = {
    createUser: jest.fn(),
    getUser: jest.fn()
  }

  mockClear() {
    this.mockUserSpi.createUser.mockClear()
    this.mockUserSpi.getUser.mockClear()
  }

  mockCreateUser(username: string, user: User) {
    this.mockUserSpi.createUser.mockImplementation(input => {
      if (input === username) {
        return Promise.resolve(user)
      } else {
        return Promise.reject(new Error('Mock fail'))
      }
    })
  }

  mockGetUserFail(userId: string) {
    this.mockUserSpi.getUser.mockImplementation(input => {
      if (input === userId) {
        return Promise.reject(new Error('User not exist'))
      } else {
        return Promise.reject(new Error('Mock fail'))
      }
    })
  }

  mockGetUser(userId: string, userToFind: User) {
    this.mockUserSpi.getUser.mockImplementation(input => {
      if (input === userId) {
        return Promise.resolve(userToFind)
      } else {
        return Promise.reject(new Error('Mock fail'))
      }
    })
  }

  getMock() {
    return this.mockUserSpi
  }
}

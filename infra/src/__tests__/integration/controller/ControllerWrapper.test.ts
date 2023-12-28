import { ControllerApplicationTestContext, ControllerInitInjectionAndStartServer, MockUserApiFactory } from '../../testtools/ControllerIntegrationTestTools'
import { CreateUserTestOk, UserNameNotAString } from './usercontroller/CreateUser.test'
import { GetUserOk, UserNotExist } from './usercontroller/GetUser.test'

describe('Integration controller test wrapper', () => {
  let testContext: ControllerApplicationTestContext
  const mockUserApiFactory = new MockUserApiFactory()

  beforeAll(async () => {
    testContext = await ControllerInitInjectionAndStartServer(mockUserApiFactory.getMock())
  })

  afterAll(async () => {
    testContext.server.close()
  })

  describe('User controller', () => {
    describe('Get user', () => {
      beforeEach(() => {
        mockUserApiFactory.mockClear()
      })
      test('Get user ok', async () => GetUserOk(mockUserApiFactory))
      test('User not exist', async () => UserNotExist(mockUserApiFactory))
    })

    describe('Create user', () => {
      beforeEach(() => {
        mockUserApiFactory.mockClear()
      })
      test('Get user ok', async () => CreateUserTestOk(mockUserApiFactory))
      test('User name not a string', async () => UserNameNotAString())
    })
  })
})

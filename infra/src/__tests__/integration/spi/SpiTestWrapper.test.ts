import { ApplicationTestContext, initInjectionAndStartServer } from '../../testtools/IntegrationTestTools'
import { SaveUserTest } from './userspiimpl/SaveUser.Test'

describe('Integration SPI test wrapper', () => {
  jest.setTimeout(60000)

  let testContext: ApplicationTestContext

  beforeAll(async () => {
    testContext = await initInjectionAndStartServer()
  })

  afterAll(async () => {
    console.log('After all')
    testContext.server.close()
    await testContext.sequelize.close()
    await testContext.startedContainer.stop()
  })

  describe('UserSpiImpl', () => {
    describe('Saver User', () => {
      test('ok', async () => SaveUserTest(testContext))
    })
  })
})

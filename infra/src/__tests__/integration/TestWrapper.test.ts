import { ApplicationTestContext, initInjectionAndStartServer } from "../testtools/IntegrationTestTools";
import { SaveUserTest } from "./spi/userspiimpl/SaveUser.Test"

describe('Integration test wrapper', () => {
    jest.setTimeout(60000);

    let testContext: ApplicationTestContext

    beforeAll(async () => {
        testContext = await initInjectionAndStartServer()
    })

    afterAll(async () => {
        console.log("After all")
        testContext.server.close()
        await testContext.sequelize.close()
        await testContext.startedContainer.stop()
    })

    describe('SaveUserTest', () => {
        console.log(testContext)
        test('Save User ok', async () => SaveUserTest(testContext))

    })
  
})
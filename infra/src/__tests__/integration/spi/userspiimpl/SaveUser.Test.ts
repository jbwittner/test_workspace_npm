import request from 'supertest'
import { ApplicationTestContext, initInjectionAndStartServer } from '../../../testtools/IntegrationTestTools'
import { app } from '../../../../configuration/expressConf'
import { v4 as uuidv4 } from 'uuid'
import { User } from '@monorepo/domain'
import { faker } from '@faker-js/faker'
import { UserEntity } from '../../../../spi/models/UserEntity'

export const SaveUserTest = () => {
  jest.setTimeout(60000);

  let testContext: ApplicationTestContext

  beforeAll(async () => {
    testContext = await initInjectionAndStartServer()
  })

  afterAll(async () => {
    testContext.server.close()
    await testContext.sequelize.close()
    await testContext.startedContainer.stop()
  })

  beforeEach(() => {})

  test('Save user Ok', async () => {
    const user = new User(faker.internet.userName(), uuidv4())

    await testContext.injections.userSpi.save(user)

    const userEntity = await UserEntity.findByPk(user.getUserId())

    expect(userEntity).not.toBeNull()
    expect(userEntity!.userId).toBe(user.getUserId())
    expect(userEntity!.userName).toBe(user.getUserName())
  })

}

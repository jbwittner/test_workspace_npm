import { UserRequest } from '../../../controller/UserController'
import request from 'supertest'
import { faker } from '@faker-js/faker'
import { ApplicationTestContext, initInjectionAndStartServer } from '../../testtools/IntegrationTestTools'
import { app } from '../../../configuration/expressConf'

describe('Test create user method', () => {
  let testContext: ApplicationTestContext

  beforeAll(async () => {
    testContext = await initInjectionAndStartServer()
  })

  afterAll(() => {
    testContext.server.close()
  })

  beforeEach(() => {})

  test('toto', async () => {
    const user = await testContext.infraIntegrationFactory.getUser()

    const userFinded = await testContext.injections.userSpi.findUser(user.getUserId())

    expect(userFinded).toEqual(user)
  })

  test('Create user Ok', async () => {
    const userRequest: UserRequest = {
      username: faker.internet.userName()
    }

    const res = await request(app).post('/user').send(userRequest)

    expect(res.statusCode).toEqual(201)
    expect(res.body.userName).toEqual(userRequest.username)

    const userId = res.body.userId

    const user = await testContext.injections.userApi.getUser(userId)

    expect(user.getUserName()).toEqual(userRequest.username)
  })

  test('UserName not a string', async () => {
    const res = await request(app).post('/user').send({
      username: 45
    })

    expect(res.statusCode).toEqual(400)
  })
})

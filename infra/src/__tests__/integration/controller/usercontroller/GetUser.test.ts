import request from 'supertest'
import { ApplicationTestContext, initInjectionAndStartServer } from '../../../testtools/IntegrationTestTools'
import { app } from '../../../../configuration/expressConf'
import { v4 as uuidv4 } from 'uuid'

/*
describe('Test find user method', () => {
  jest.setTimeout(60000);

  let testContext: ApplicationTestContext

  beforeAll(async () => {
    testContext = await initInjectionAndStartServer()
  })

  afterAll(() => {
    testContext.server.close()
  })

  beforeEach(() => {})

  test('Get user Ok', async () => {
    const user = await testContext.infraIntegrationFactory.getUser()

    const res = await request(app).get('/user/' + user.getUserId())

    expect(res.ok).toBeTruthy()
    expect(res.body.userName).toEqual(user.getUserName())
    expect(res.body.userId).toEqual(user.getUserId())
  })

  test('User not exist', async () => {
    const userId = uuidv4()

    const res = await request(app).get('/user/' + userId)

    expect(res.statusCode).toEqual(500)
  })
})
*/
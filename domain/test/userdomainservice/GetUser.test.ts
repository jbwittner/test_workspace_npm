import { User, UserDomainService, UserSpi } from '../../src'
import { v4 as uuidv4 } from 'uuid'

describe('Test getUser method', () => {
  let userDomainService: UserDomainService
  let userSpi: jest.Mocked<UserSpi> = {
    save: jest.fn(),
    findUser: jest.fn()
  }

  beforeEach(() => {
    userSpi.save.mockClear()
    userSpi.findUser.mockClear()
    userDomainService = new UserDomainService(userSpi)
  })

  test('Get user Ok', () => {
    const userName = 'userToto'
    const userId = uuidv4()
    const userToFind = new User(userName, userId)

    userSpi.findUser.mockImplementation(userId => userToFind)
    const user = userDomainService.getUser(userId)

    expect(user).toBe(userToFind)
  })

  test('User not exist', () => {
    const userId = uuidv4()
    userSpi.findUser.mockImplementation(userId => undefined)
    expect(() => userDomainService.getUser(userId)).toThrow('User not exist')
  })
})

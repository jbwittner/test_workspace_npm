import { DomainFaker } from '@monorepo/domain/test-lib'
import { faker } from '@faker-js/faker'
import { UserDomainService, UserSpi } from '@monorepo/domain'

describe('Test createUser method', () => {
  DomainFaker(faker)
  let userDomainService: UserDomainService
  const userSpi: jest.Mocked<UserSpi> = {
    save: jest.fn(),
    findUser: jest.fn()
  }

  beforeEach(() => {
    userSpi.save.mockClear()
    userSpi.findUser.mockClear()
    userDomainService = new UserDomainService(userSpi)
  })

  test('Create user Ok', () => {
    userSpi.save.mockImplementation(user => user)
    const userName = 'userToto'
    const user = userDomainService.createUser(userName)
    expect(user.getUserName()).toBe(userName)
  })
})

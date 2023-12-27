import { v4 as uuidv4 } from 'uuid'
import { UserSpi } from '../../../spi'
import { DomainFaker } from '../../testtools/DomainFaker'
import { faker } from '@faker-js/faker'
import { UserDomainService } from '../../../service'

describe('Test getUser method', () => {
  let userDomainService: UserDomainService
  const domainFaker = DomainFaker(faker)
  const userSpi: jest.Mocked<UserSpi> = {
    save: jest.fn(),
    findUser: jest.fn()
  }

  beforeEach(() => {
    userSpi.save.mockClear()
    userSpi.findUser.mockClear()
    userDomainService = new UserDomainService(userSpi)
  })

  test('Get user Ok', () => {
    const userToFind = domainFaker.getUser()

    userSpi.findUser.mockImplementation(() => userToFind)
    const user = userDomainService.getUser(userToFind.getUserId())

    expect(user).toBe(userToFind)
  })

  test('User not exist', () => {
    const userId = uuidv4()
    userSpi.findUser.mockImplementation(() => undefined)
    expect(() => userDomainService.getUser(userId)).toThrow('User not exist')
  })
})

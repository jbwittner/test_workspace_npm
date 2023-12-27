import { v4 as uuidv4 } from 'uuid'
import { DomainFactory } from '../../testtools/DomainFactory'
import { faker } from '@faker-js/faker'
import { UserDomainService } from '../../../service'
import { MockUserSpiFactory } from '../../testtools/MockFactory'

describe('Test getUser method', () => {
  let userDomainService: UserDomainService
  const domainFactory = DomainFactory(faker)
  const mockUserSpiFactory = MockUserSpiFactory()

  beforeEach(() => {
    mockUserSpiFactory.mockClear()
    userDomainService = new UserDomainService(mockUserSpiFactory.getMock())
  })

  test('Get user Ok', () => {
    const userToFind = domainFactory.getUser()
    const userId = userToFind.getUserId()

    mockUserSpiFactory.mockFindUser(userId, userToFind)
    const user = userDomainService.getUser(userToFind.getUserId())

    expect(user).toBe(userToFind)
  })

  test('User not exist', () => {
    const userId = uuidv4()
    mockUserSpiFactory.mockFindUser(userId, undefined)
    expect(() => userDomainService.getUser(userId)).toThrow('User not exist')
  })
})

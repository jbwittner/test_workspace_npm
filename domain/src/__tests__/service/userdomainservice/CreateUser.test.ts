import { UserDomainService } from '../../../service'
import { MockUserSpiFactory } from '../../testtools/MockFactory'

describe('Test createUser method', () => {
  let userDomainService: UserDomainService
  const mockUserSpiFactory = MockUserSpiFactory()

  beforeEach(() => {
    mockUserSpiFactory.mockClear()
    userDomainService = new UserDomainService(mockUserSpiFactory.getMock())
  })

  test('Create user Ok', () => {
    mockUserSpiFactory.mockSave()
    const userName = 'userToto'
    const user = userDomainService.createUser(userName)
    expect(user.getUserName()).toBe(userName)
  })
})

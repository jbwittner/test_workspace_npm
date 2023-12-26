import { DomainFaker } from '@monorepo/domain/test'
import { UserSpiImpl } from '../../../src/spi/UserSpiImpl'
import { faker } from '@faker-js/faker'

describe('Test find user method', () => {
  let userSpiImpl: UserSpiImpl
  let domainFaker = DomainFaker(faker)

  beforeEach(() => {
    userSpiImpl = new UserSpiImpl()
  })

  test('Create user Ok', () => {
    const user = domainFaker.getUser()
    const userSaved = userSpiImpl.save(user)
    expect(userSaved).toEqual(user)

    const userFinded = userSpiImpl.findUser(user.getUserId())
    expect(userFinded).toEqual(user)
  })
})

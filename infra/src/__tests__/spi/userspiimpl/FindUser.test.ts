import { faker } from '@faker-js/faker'
import { UserSpiImpl } from '../../../spi/UserSpiImpl'
import { InfraFaker } from '../../testtools/InfraFaker'

describe('Test find user method', () => {
  let userSpiImpl: UserSpiImpl
  const infraFaker = InfraFaker(faker)

  beforeEach(() => {
    userSpiImpl = new UserSpiImpl()
  })

  test('Create user Ok', () => {
    const user = infraFaker.getUser()
    const userSaved = userSpiImpl.save(user)
    expect(userSaved).toEqual(user)

    const userFinded = userSpiImpl.findUser(user.getUserId())
    expect(userFinded).toEqual(user)
  })
})
